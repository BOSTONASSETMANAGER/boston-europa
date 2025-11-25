import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PolitiqueCookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Politique relative aux cookies</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="font-medium">
            Politique de cookies pour www.bostonam.fr / www.bostonassetmanager.fr
          </p>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Utilisation des cookies</h2>
            <p className="mb-4">
              Le “Site” (www.bostonam.fr / www.bostonassetmanager.fr) utilise des cookies pour rendre vos services simples et efficaces pour les utilisateurs qui consultent les pages de www.bostonam.fr / www.bostonassetmanager.fr. Les utilisateurs qui consultent le site verront des quantités minimales d’informations saisies dans les appareils utilisés, qu’il s’agisse d’ordinateurs ou d’appareils mobiles, dans de petits fichiers texte appelés “cookies” enregistrés dans les répertoires utilisés par le navigateur Web de l’utilisateur. Il existe différents types de cookies, certains pour rendre l’utilisation du Site plus efficace, d’autres pour activer certaines fonctionnalités.
            </p>
            <p className="mb-4">
              En les analysant en détail, nos cookies vous permettent de :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>mémoriser les préférences saisies ;</li>
              <li>éviter de ressaisir plusieurs fois les mêmes informations au cours de la visite telles que nom d’utilisateur et mot de passe ;</li>
              <li>analyser l’utilisation des services et contenu fourni par bostonam.fr pour optimiser l’expérience de navigation et les services offerts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Types de cookies</h2>
            
            <h3 className="font-bold mt-4 mb-2">Cookies techniques</h3>
            <p className="mb-4">
              Ce type de cookie permet le bon fonctionnement de certaines sections du Site. Ils sont de deux catégories : persistant et de session :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>persistants :</strong> une fois le navigateur fermé, ils ne sont pas détruits mais restent jusqu’à une date d’expiration prédéfinie</li>
              <li><strong>session :</strong> ils sont détruits à chaque fermeture du navigateur</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">Cookies analytiques</h3>
            <p className="mb-4">
              Les cookies de cette catégorie sont utilisés pour collecter des informations sur l’utilisation du site. www.bostonam.fr / www.bostonassetmanager.fr utilisera ces informations à des fins d’analyse statistique anonyme afin d’améliorer l’utilisation du Site et de rendre le contenu plus intéressant et plus adapté aux souhaits des utilisateurs. Ce type de cookie collecte des données anonymes sur l’activité de l’utilisateur et son arrivée sur le Site. Les cookies analytiques sont envoyés depuis le Site lui-même ou depuis des domaines tiers.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookies d’analyse de services tiers</h3>
            <p className="mb-4">
              Ces cookies sont utilisés afin de collecter des informations sur l’utilisation du Site par les utilisateurs de manière anonyme telles que : les pages visitées, le temps passé, les origines du trafic d’origine, l’origine géographique, l’âge, le sexe et les centres d’intérêt à des fins de marketing campagnes. Ces cookies sont envoyés à partir de domaines tiers externes au Site.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookies pour intégrer des produits et fonctions logiciels tiers</h3>
            <p className="mb-4">
              Ce type de cookie intègre des fonctionnalités développées par des tiers au sein des pages du Site telles que des icônes et des préférences exprimées dans les réseaux sociaux afin de partager le contenu du site ou pour l’utilisation de services logiciels tiers (tels que des logiciels de génération cartes et autres logiciels offrant des services supplémentaires). Ces cookies sont envoyés à partir de domaines tiers et de sites partenaires qui proposent leurs fonctionnalités sur les pages du Site.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookies de profilage</h3>
            <p className="mb-4">
              Ces cookies sont nécessaires pour créer des profils d’utilisateurs afin d’envoyer des messages publicitaires en ligne avec les préférences exprimées par l’utilisateur dans les pages du Site.
            </p>
            <p className="mb-4">
              www.bostonam.fr / www.bostonassetmanager.fr, conformément à la législation en vigueur, n’est pas tenu de demander le consentement pour les cookies techniques et analytiques, car ils sont nécessaires pour fournir les services requis.
            </p>
            <p className="mb-4">
              Pour tous les autres types de cookies, le consentement peut être exprimé par l’Utilisateur avec une ou plusieurs des méthodes suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Par des configurations spécifiques du navigateur utilisé ou des programmes informatiques associés utilisés pour naviguer sur les pages qui composent le Site.</li>
              <li>En modifiant les paramètres dans l’utilisation de services tiers</li>
            </ul>
            <p className="mb-4">
              Ces deux solutions peuvent empêcher l’utilisateur d’utiliser ou de visualiser des parties du Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Sites Web et services tiers</h2>
            <p className="mb-4">
              Le Site peut contenir des liens vers d’autres sites Web qui ont leur propre politique de confidentialité qui peut être différente de celle adoptée par www.bostonam.fr / www.bostonassetmanager.fr et donc pas responsable de ces sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Comment désactiver les cookies via la configuration du navigateur</h2>
            <p className="mb-4">
              Si vous souhaitez en savoir plus sur la manière dont votre navigateur stocke les cookies lors de votre navigation, veuillez suivre ces liens sur les sites Web des fournisseurs respectifs.
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

          <p className="text-sm text-gray-500 mt-8">Dernière mise à jour le 14/07/2022</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
