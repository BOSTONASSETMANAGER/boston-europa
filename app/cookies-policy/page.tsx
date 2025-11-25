import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Cookies policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="font-medium">
            Cookies policy för bostonam.se / bostonassetmanager.se
          </p>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Användning av cookies</h2>
            <p className="mb-4">
              “Webbplatsen” (bostonam.se/bostonassetmanager.se) använder cookies för att göra sina tjänster enkla och effektiva för användare som tittar på sidorna i bostonam.se/bostonassetmanager.se. Användare som tittar på webbplatsen kommer att se den minsta mängd information som anges på de enheter som används, som är datorer och mobila enheter, i små textfiler som kallas “cookies” lagrade i katalogerna som används av användarens webbläsare. Det finns flera typer av cookies, vissa för att göra användningen av webbplatsen mer effektiv, andra för att möjliggöra vissa funktioner.
            </p>
            <p className="mb-4">
              Genom att analysera dem i detalj tillåter våra cookies dig att:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>lagra de angivna inställningarna;</li>
              <li>undvik att ange samma information flera gånger under besöket, till exempel användarnamn och lösenord;</li>
              <li>analysera användningen av de tjänster och det innehåll som tillhandahålls av bostonam.it/bostonassetmanager.it för att optimera surfupplevelsen och de tjänster som erbjuds.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Typer av cookies</h2>
            
            <h3 className="font-bold mt-4 mb-2">Tekniska cookies</h3>
            <p className="mb-4">
              Denna typ av cookie gör det möjligt för vissa delar av webbplatsen att fungera korrekt. De är av två kategorier: beständig och session:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>persistent:</strong> när webbläsaren stängs förstörs de inte utan förblir tills ett förinställt utgångsdatum</li>
              <li><strong>session:</strong> de förstörs varje gång webbläsaren stängs</li>
            </ul>
            <p className="mb-4">
              Dessa cookies, som alltid skickas från vår domän, är nödvändiga för att se webbplatsen korrekt och i förhållande till de tekniska tjänster som erbjuds, därför kommer de alltid att användas och skickas, såvida inte användaren inte ändrar inställningarna i sin webbläsare (vilket påverkar visningen av sidorna på webbplatsen).
            </p>

            <h3 className="font-bold mt-4 mb-2">Analytiska cookies</h3>
            <p className="mb-4">
              Cookies i denna kategori används för att samla in information om användningen av webbplatsen. bostonam.se/bostonassetmanager.se kommer att använda denna information med avseende på anonym statistisk analys för att förbättra användningen av webbplatsen och göra innehållet mer intressant och relevant för användarnas önskemål. Denna typ av cookie samlar in anonyma data om användaraktivitet och hur de kom till webbplatsen. Analytiska cookies skickas från själva webbplatsen eller från tredjepartsdomäner.
            </p>

            <h3 className="font-bold mt-4 mb-2">Analyscookies från tredjepartstjänster</h3>
            <p className="mb-4">
              Dessa cookies används för att samla in information om användningen av webbplatsen av användare anonymt, till exempel: besökta sidor, tidsåtgång, ursprung för ursprungstrafik, geografiskt ursprung, ålder, kön och intressen för marknadsföringskampanjer. Dessa cookies skickas från tredjepartsdomäner utanför webbplatsen.
            </p>

            <h3 className="font-bold mt-4 mb-2">Cookies för att integrera programvaruprodukter och funktioner från tredje part</h3>
            <p className="mb-4">
              Denna typ av cookie integrerar funktioner som utvecklats av tredje part på sidorna på webbplatsen, såsom ikoner och preferenser som uttrycks på sociala nätverk i syfte att dela innehållet på webbplatsen eller för användning av programvarutjänster från tredje part (t.ex. programvara för att generera kartor och ytterligare programvara som erbjuder ytterligare tjänster). Dessa cookies skickas från tredjepartsdomäner och partnerwebbplatser som erbjuder sin funktionalitet mellan sidorna på webbplatsen.
            </p>

            <h3 className="font-bold mt-4 mb-2">Profilering av cookies</h3>
            <p className="mb-4">
              De är de cookies som är nödvändiga för att skapa användarprofiler för att skicka reklammeddelanden i linje med de preferenser som användaren uttrycker på sidorna på webbplatsen.
            </p>
            <p className="mb-4">
              bostonam.es/bostonassetmanager.es enligt gällande lagstiftning inte är skyldig att inhämta samtycke till tekniska och analytiska cookies, eftersom de är nödvändiga för att tillhandahålla de tjänster som krävs.
            </p>
            <p className="mb-4">
              För alla andra typer av cookies kan samtycke uttryckas av användaren på ett eller flera av följande sätt:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Genom specifika inställningar för webbläsaren som används eller relaterade datorprogram som används för att navigera på sidorna som utgör webbplatsen.</li>
              <li>Ändra inställningar för användning av tjänster från tredje part</li>
            </ul>
            <p className="mb-4">
              Båda lösningarna kan hindra dig från att använda eller visa delar av webbplatsen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Tredje parts webbplatser och tjänster</h2>
            <p className="mb-4">
              Webbplatsen kan innehålla länkar till andra webbplatser som har sin egen sekretesspolicy som kan skilja sig från den som antagits av bostonam.it/bostonassetmanager.it och är därför inte ansvarig för dessa webbplatser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Så här inaktiverar du cookies genom att konfigurera din webbläsare</h2>
            <p className="mb-4">
              Om du vill lära dig mer om hur din webbläsare lagrar cookies under din surfning, inbjuder vi dig att följa dessa länkar på respektive leverantörs webbplatser.
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
                <p className="font-medium">Safari på din iPhone, iPad eller iPod touch</p>
                <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://support.apple.com/it-it/HT201265
                </a>
              </div>
            </div>
          </section>

          <p className="text-sm text-gray-500 mt-8">Senast uppdaterad 17/08/2022</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
