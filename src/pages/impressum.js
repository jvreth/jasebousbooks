import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Headline = styled.h1`
  font-size: 3.5rem;
  font-family: var(--font-light);
  margin: 1rem 0;
  text-align: center;
  color: var(--basic);
  font-weight: 200;

  @media screen and (max-width: 42.5rem) {
    font-size: 2.5rem;
  }
`

const Impressum = () => (
  <Layout className="content">
    <SEO title="Impressum" />
    <Headline>Impressum</Headline>
    <h2>Angaben gemäß &sect; 5 TMG</h2>
    <p>
      Jasmin von Reth<br />
      Meckhofer Feld 45<br />
      51377 Leverkusen
    </p>
    <h2>Kontakt</h2>
    <p>
      E-Mail: jasmin.vonreth@gmail.com
    </p>
    <h2>Verantwortlich für den Inhalt nach &sect; 55 Abs. 2 RStV</h2>
    <p>
      Jasmin von Reth<br />
      Meckhofer Feld 45<br />
      51377 Leverkusen
    </p>
    <h3>Haftung für Inhalte</h3>
    <p>
      Als Diensteanbieter sind wir gemäß &sect; 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
      Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
      Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
      Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
      Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
    </p>
    <h3>Haftung für Links</h3>
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
      Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
      Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
      bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
      Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
      Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
      bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
    </p>

    <p>
      Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">e-recht24.de</a>
    </p>
  </Layout>
)

export default Impressum;