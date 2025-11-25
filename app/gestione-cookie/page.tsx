import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GestioneCookiePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Cookie policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="font-medium">
            Cookie policy per www.bostonam.it / bostonassetmanager.it
          </p>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Uso dei cookie</h2>
            <p className="mb-4">
              Il “Sito” (bostonam.it / bostonassetmanager.it) utilizza i Cookie per rendere i propri servizi semplici e efficienti per l’utenza che visiona le pagine di bostonam.it / bostonassetmanager.it. Gli utenti che visionano il Sito, vedranno inserite delle quantità minime di informazioni nei dispositivi in uso, che siano computer e periferiche mobili, in piccoli file di testo denominati “cookie” salvati nelle directory utilizzate dal browser web dell’Utente. Vi sono vari tipi di cookie, alcuni per rendere più efficace l’uso del Sito, altri per abilitare determinate funzionalità.
            </p>
            <p className="mb-4">
              Analizzandoli in maniera particolareggiata i nostri cookie permettono di:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>memorizzare le preferenze inserite;</li>
              <li>evitare di reinserire le stesse informazioni più volte durante la visita quali ad esempio nome utente e password;</li>
              <li>analizzare l’utilizzo dei servizi e dei contenuti forniti da bostonam.it / bostonassetmanager.it per ottimizzarne l’esperienza di navigazione e i servizi offerti.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Tipologie di Cookie</h2>
            
            <h3 className="font-bold mt-4 mb-2">Cookie tecnici</h3>
            <p className="mb-4">
              Questa tipologia di cookie permette il corretto funzionamento di alcune sezioni del Sito. Sono di due categorie: persistenti e di sessione:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>persistenti:</strong> una volta chiuso il browser non vengono distrutti ma rimangono fino ad una data di scadenza preimpostata</li>
              <li><strong>di sessione:</strong> vengono distrutti ogni volta che il browser viene chiuso</li>
            </ul>
            <p className="mb-4">
              Questi cookie, inviati sempre dal nostro dominio, sono necessari a visualizzare correttamente il sito e in relazione ai servizi tecnici offerti, verranno quindi sempre utilizzati e inviati, a meno che l’utenza non modifichi le impostazioni nel proprio browser (inficiando così la visualizzazione delle pagine del sito).
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookie analitici</h3>
            <p className="mb-4">
              I cookie in questa categoria vengono utilizzati per collezionare informazioni sull’uso del sito. bostonam.it / bostonassetmanager.it userà queste informazioni in merito ad analisi statistiche anonime al fine di migliorare l’utilizzo del Sito e per rendere i contenuti più interessanti e attinenti ai desideri dell’utenza. Questa tipologia di cookie raccoglie dati in forma anonima sull’attività dell’utenza e su come è arrivata sul Sito. I cookie analitici sono inviati dal Sito Stesso o da domini di terze parti.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookie di analisi di servizi di terze parti</h3>
            <p className="mb-4">
              Questi cookie sono utilizzati al fine di raccogliere informazioni sull’uso del Sito da parte degli utenti in forma anonima quali: pagine visitate, tempo di permanenza, origini del traffico di provenienza, provenienza geografica, età, genere e interessi ai fini di campagne di marketing. Questi cookie sono inviati da domini di terze parti esterni al Sito.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookie per integrare prodotti e funzioni di software di terze parti</h3>
            <p className="mb-4">
              Questa tipologia di cookie integra funzionalità sviluppate da terzi all’interno delle pagine del Sito come le icone e le preferenze espresse nei social network al fine di condivisione dei contenuti del sito o per l’uso di servizi software di terze parti (come i software per generare le mappe e ulteriori software che offrono servizi aggiuntivi). Questi cookie sono inviati da domini di terze parti e da siti partner che offrono le loro funzionalità tra le pagine del Sito.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookie di profilazione</h3>
            <p className="mb-4">
              Sono quei cookie necessari a creare profili utenti al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dall’utente all’interno delle pagine del Sito.
            </p>
            <p className="mb-4">
              bostonam.it / bostonassetmanager.it, secondo la normativa vigente, non è tenuto a chiedere consenso per i cookie tecnici e di analytics, in quanto necessari a fornire i servizi richiesti.
            </p>
            <p className="mb-4">
              Per tutte le altre tipologie di cookie il consenso può essere espresso dall’Utente con una o più di una delle seguenti modalità:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Mediante specifiche configurazioni del browser utilizzato o dei relativi programmi informatici utilizzati per navigare le pagine che compongono il Sito.</li>
              <li>Mediante modifica delle impostazioni nell’uso dei servizi di terze parti</li>
            </ul>
            <p className="mb-4">
              Entrambe queste soluzioni potrebbero impedire all’utente di utilizzare o visualizzare parti del Sito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Siti Web e servizi di terze parti</h2>
            <p className="mb-4">
              Il Sito potrebbe contenere collegamenti ad altri siti Web che dispongono di una propria informativa sulla privacy che può essere diverse da quella adottata da bostonam.it / bostonassetmanager.it e che che quindi non risponde di questi siti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Come disabilitare i cookie mediante configurazione del browser</h2>
            <p className="mb-4">
              Se desideri approfondire le modalità con cui il tuo browser memorizza i cookies durante la tua navigazione, ti invitiamo a seguire questi link sui siti dei rispettivi fornitori.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Mozilla Firefox</p>
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.mozilla.org/it/kb/Gestione%20dei%20cookie
                </a>
              </div>
              <div>
                <p className="font-medium">Google Chrome</p>
                <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.google.com/chrome/answer/95647?hl=it
                </a>
              </div>
              <div>
                <p className="font-medium">Internet Explorer</p>
                <a href="https://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies
                </a>
              </div>
              <div>
                <p className="font-medium">Safari 6/7 Mavericks</p>
                <a href="https://support.apple.com/kb/PH17191?viewlocale=it_IT&locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.apple.com/kb/PH17191?viewlocale=it_IT&locale=it_IT
                </a>
              </div>
              <div>
                <p className="font-medium">Safari 8 Yosemite</p>
                <a href="https://support.apple.com/kb/PH19214?viewlocale=it_IT&locale=it_IT" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.apple.com/kb/PH19214?viewlocale=it_IT&locale=it_IT
                </a>
              </div>
              <div>
                <p className="font-medium">Safari su iPhone, iPad, o iPod touch</p>
                <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.apple.com/it-it/HT201265
                </a>
              </div>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8">Ultimo aggiornamento 13/07/2022</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
