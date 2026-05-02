export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto py-32 px-6 text-charcoal leading-relaxed">
            <h1 className="text-4xl font-serif mb-8 border-b border-gold pb-4">
                Informativa sulla Privacy e sui Cookie
            </h1>

            <p className="mb-6">
                La presente Informativa ha lo scopo di informare l&apos;utente circa le modalità di trattamento dei dati personali che lo riguardano, in conformità al Regolamento UE 2016/679 (GDPR) e al Codice della Privacy novellato dal D.Lgs. 101/2018.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">1. Titolare del Trattamento</h2>
                <p>
                    Il Titolare del trattamento è l&apos;<strong>Avvocato Anna Fusco</strong>, con studio professionale in Via Palermo 16, 04019 Terracina (LT).<br />
                    <strong>Email:</strong> ass.legale@gmail.com<br />
                    <strong>PEC:</strong> 
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">2. Tipologia di Dati Trattati</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Dati di navigazione:</strong> Indirizzi IP, log di sistema e parametri relativi al sistema operativo dell&apos;utente.</li>
                    <li><strong>Dati forniti volontariamente:</strong> Nome, cognome, indirizzo email e ogni altra informazione inviata tramite il modulo di contatto o i recapiti presenti sul sito.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">3. Finalità e Base Giuridica</h2>
                <p className="mb-2">I dati sono trattati per le seguenti finalità:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Esecuzione di misure precontrattuali:</strong> Riscontrare richieste di consulenza o preventivi inviati dall&apos;interessato.</li>
                    <li><strong>Obblighi di legge:</strong> Adempiere a doveri previsti dalla normativa fiscale e civile.</li>
                    <li><strong>Legittimo interesse:</strong> Garantire la sicurezza del sito e prevenire frodi.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">4. Modalità di Trattamento e Conservazione</h2>
                <p>
                    Il trattamento viene effettuato con strumenti informatici e/o manuali, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
                    I dati saranno conservati per il tempo strettamente necessario a gestire la richiesta dell&apos;utente o secondo quanto previsto dagli obblighi di legge professionale (solitamente 10 anni per i documenti contabili/fiscali).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">5. Diritti dell&apos;Interessato</h2>
                <p className="mb-2">L&apos;utente può esercitare in ogni momento i diritti previsti dagli artt. 15-22 del GDPR, tra cui:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>L&apos;accesso ai propri dati e la richiesta di una copia.</li>
                    <li>La rettifica o la cancellazione degli stessi (diritto all&apos;oblio).</li>
                    <li>La limitazione del trattamento o l&apos;opposizione allo stesso.</li>
                    <li>Il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4">6. Cookie Policy</h2>
                <p>
                    Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al corretto funzionamento della piattaforma e cookie analitici anonimizzati. Non vengono utilizzati cookie di profilazione per l&apos;invio di pubblicità mirata.
                    L&apos;utente può gestire le preferenze sui cookie direttamente attraverso le impostazioni del proprio browser.
                </p>
            </section>

            <p className="text-sm text-gray-500 mt-12">
                Ultimo aggiornamento: Aprile 2026
            </p>
        </div>
    );
}