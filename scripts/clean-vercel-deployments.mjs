#!/usr/bin/env node

/**
 * clean-vercel-deployments.mjs
 * 
 * Script per ripulire i vecchi deploy di Vercel più vecchi di 30 giorni (1 mese).
 * Utilizza la Vercel CLI con il flag `--safe` per non toccare mai deploy attivi/in produzione.
 * 
 * Uso:
 *   node scripts/clean-vercel-deployments.mjs           (Mostra l'elenco - Dry Run sicuro)
 *   node scripts/clean-vercel-deployments.mjs --delete (Cancella effettivamente i vecchi deploy)
 *   node scripts/clean-vercel-deployments.mjs --days 45 (Personalizza i giorni di conservazione)
 */

import { execSync } from 'child_process';

const PROJECT_NAME = 'studio-legale';
const args = process.argv.slice(2);

const isDeleteMode = args.includes('--delete') || args.includes('--yes') || args.includes('-y');
const daysIndex = args.indexOf('--days');
const RETENTION_DAYS = daysIndex !== -1 && args[daysIndex + 1] ? parseInt(args[daysIndex + 1], 10) : 30;

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const cutoffTimestamp = Date.now() - (RETENTION_DAYS * MS_PER_DAY);
const cutoffDateStr = new Date(cutoffTimestamp).toLocaleDateString('it-IT');

console.log(`\n======================================================`);
console.log(`🧹 Vercel Deployment Cleaner - Progetto: ${PROJECT_NAME}`);
console.log(`📅 Giorni da conservare: ${RETENTION_DAYS} giorni (taglio prima del ${cutoffDateStr})`);
console.log(`⚙️  Modalità: ${isDeleteMode ? '🚨 ELIMINAZIONE REALE' : '🔍 SIMULAZIONE (Dry-run, nessuna eliminazione)'}`);
console.log(`======================================================\n`);

async function fetchDeployments() {
  const allDeployments = [];
  let next = null;
  let page = 1;

  while (true) {
    process.stdout.write(`Recupero deploy (pagina ${page})... `);
    const nextFlag = next ? `--next ${next}` : '';
    const cmd = `npx --yes vercel ls ${PROJECT_NAME} --json --limit 100 ${nextFlag}`;
    
    let stdout;
    try {
      stdout = execSync(cmd, { stdio: ['pipe', 'pipe', 'pipe'], encoding: 'utf-8' });
    } catch (err) {
      console.error(`\nErrore durante il recupero dei deploy da Vercel:`, err.message);
      break;
    }

    let data;
    try {
      data = JSON.parse(stdout);
    } catch (e) {
      console.error(`\nImpossibile decodificare l'output JSON di Vercel.`);
      break;
    }

    const deployments = data.deployments || [];
    console.log(`trovati ${deployments.length}`);
    allDeployments.push(...deployments);

    if (data.pagination && data.pagination.next && deployments.length > 0) {
      next = data.pagination.next;
      page++;
    } else {
      break;
    }
  }

  return allDeployments;
}

async function main() {
  const deployments = await fetchDeployments();
  console.log(`\nTotale deploy trovati per "${PROJECT_NAME}": ${deployments.length}`);

  const toKeep = [];
  const toDelete = [];

  for (const d of deployments) {
    const ageDays = Math.round((Date.now() - d.createdAt) / MS_PER_DAY);
    const item = {
      url: d.url,
      createdAt: new Date(d.createdAt).toLocaleString('it-IT'),
      ageDays,
      state: d.state,
      commitMsg: d.meta?.githubCommitMessage || 'Deploy manuale/CLI'
    };

    if (d.createdAt >= cutoffTimestamp) {
      toKeep.push(item);
    } else {
      toDelete.push(item);
    }
  }

  console.log(`\n✅ Deploy recenti mantenuti (< ${RETENTION_DAYS} giorni): ${toKeep.length}`);
  toKeep.slice(0, 5).forEach(d => {
    console.log(`   • [${d.ageDays}g fa] ${d.url} (${d.state}) - "${d.commitMsg.slice(0, 40)}"`);
  });
  if (toKeep.length > 5) {
    console.log(`   ... e altri ${toKeep.length - 5} deploy recenti`);
  }

  console.log(`\n🗑️  Deploy da rimuovere (> ${RETENTION_DAYS} giorni): ${toDelete.length}`);
  if (toDelete.length === 0) {
    console.log(`Nessun deploy precedente a ${RETENTION_DAYS} giorni fa. Tutto in ordine! ✨\n`);
    return;
  }

  toDelete.forEach((d, idx) => {
    console.log(`   ${idx + 1}. [${d.ageDays}g fa - ${d.createdAt}] ${d.url}`);
  });

  if (!isDeleteMode) {
    console.log(`\n------------------------------------------------------`);
    console.log(`ℹ️  Questa era una simulazione (nessun deploy è stato rimosso).`);
    console.log(`👉 Per procedere alla cancellazione effettiva, esegui:`);
    console.log(`   node scripts/clean-vercel-deployments.mjs --delete`);
    console.log(`------------------------------------------------------\n`);
    return;
  }

  console.log(`\n🚀 Inizio eliminazione di ${toDelete.length} vecchi deploy...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < toDelete.length; i++) {
    const item = toDelete[i];
    process.stdout.write(`[${i + 1}/${toDelete.length}] Rimozione ${item.url} ... `);
    try {
      // --safe evita di rimuovere deploy con alias attivi o di produzione
      execSync(`npx --yes vercel rm ${item.url} --yes --safe`, {
        stdio: ['pipe', 'pipe', 'pipe'],
        encoding: 'utf-8'
      });
      console.log(`OK ✅`);
      successCount++;
    } catch (err) {
      console.log(`SALTATO/ERRORE ⚠️`);
      failCount++;
    }
  }

  console.log(`\n======================================================`);
  console.log(`🎉 Pulizia completata!`);
  console.log(`   • Eliminati: ${successCount}`);
  if (failCount > 0) {
    console.log(`   • Saltati (protetti da --safe o con alias): ${failCount}`);
  }
  console.log(`======================================================\n`);
}

main().catch(console.error);
