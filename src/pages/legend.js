import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"
import SEO from "../components/seo"

import StyledSection from "./css/legend.css"

const Headline = styled.h1`
  font-size: 3.5rem;
  font-family: var(--font-light);
  margin: 1rem 0;
  text-align: center;
  color: var(--basic);
  font-weight: 200;

  @media screen and (max-width: 42.5em) {
    font-size: 2.5rem;
  }
`

const CLASS = 'legend-page'

const Legend = () => (
  <Layout>
    <SEO title="Bewertungslegende" />
    <div className={`${CLASS} content`}>
      <Headline>Bewertungslegende</Headline>
      <p>Auf meinem Blog bewerte ich die Bücher anhand von Sternen. Nachfolgend erkläre ich euch aber, wofür die Sterne stehen.</p>
      <StyledSection>
        <h2>5 Sterne</h2>
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <p>
          Fünf Sterne bekommt ein Buch von mir nur dann, wenn es für mich ein Highlight war. 
          Ein Highlight ist für mich ein Buch, dass mich ständig beschäftigt, egal ob ich es gerade lese oder nicht. 
          Wenn ich ständig über das Buch nachdenken muss, mir ausmale was als nächstes passiert und ich in Gedanken eigentlich immer zu einem Teil bei der Geschichte und den Charakteren bin. 
          Die Bücher haben mich in der Regel auch unglaublich viel fühlen lassen und es sind Bücher die ich nicht so leicht vergessen werde.
        </p>
        <hr/>
      </StyledSection>
      <StyledSection>
        <h2>4 Sterne</h2>
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <p>
          Vier Sterne gebe ich Büchern die mir gut bis sehr gut gefallen haben. 
          Die mich gut unterhalten haben, wo ich die Charaktere mochte, die Handlung mich auch mitgenommen hat, es jedoch einige Sachen gab die mich gestört haben oder mir sogar gefehlt haben um das Highlight-Gefühl zu wecken. 
          Ein Buch mit vier Sternen ist für mich ein solides und gutes Buch und ich empfehle es in der Regel auch gerne weiter.
        </p>
        <hr/>
      </StyledSection>
      <StyledSection>
        <h2>3 Sterne</h2>
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <p>
          Bücher mit einer drei Sterne Bewertung find ich leider nur "okay". 
          Oft haben mich die Bücher zwar unterhalten können, aber es gab viele Stellen die mich gestört haben. 
          Ob es nun die Charaktere waren zu denen ich keine Bindung aufbauen konnte oder die Handlung für mich teilweise nich nachvollziehbar war. 
          Drei Sterne Bücher kann ich oft nur eingeschränkt weiterempfehlen.
        </p>
        <hr/>
      </StyledSection>
      <StyledSection>
        <h2>2 Sterne</h2>
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <p>
          Zwei Sterne Bücher gibt es bei mir nur selten, trotzdem passiert es ab und zu das ich einem Buch leider diese Bewertung geben muss. 
          Bücher mit dieser Bewertung fand ich von vorne bis hinten meist schlecht. Es gab zu viel das mich gestört hat und mir deshalb den spaß am Lesen vermiest hat. 
          Es ist oft eine Mischung aus fehlenden Verständnis gegenüber den Charakteren und einer Handlung die ich zum Großteil langweilig fand.
          Diese Bücher kann ich in der Regel nur sehr eingeschränkt weiterempfehlen, zum Beispiel wenn ich merke das ich nicht die Zielgruppe war.
        </p>
        <hr/>
      </StyledSection>
      <StyledSection>
        <h2>1 Stern</h2>
        <FontAwesomeIcon className={`${CLASS}__rating-icon`} icon={['fas', 'star']} />
        <p>
          Es passiert noch seltener, das ein Buch von mir nur einen Stern bekommt. 
          Diese Bücher habe ich nämlich abgebrochen und konnte die Geschichte nicht weiterlesen. 
          Ich breche wirklich sehr selten Bücher ab und wenn ich es tue, dann hat mir das Buch wirklich überhaupt nicht gefallen. 
          Diese Bücher kann ich dann auch wirklich niemanden weiterempfehlen, da ich sie auch nicht beendet habe.
        </p>
      </StyledSection>
    </div>
  </Layout>
)

export default Legend;