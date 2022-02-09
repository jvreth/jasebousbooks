import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Headline = styled.h1`
  font-size: 3.5rem;
  font-family: var(--font-light);
  font-weight: 200;
  color: var(--basic);
  text-align: center;

  @media screen and (max-width: 42.5em) {
    font-size: 2.5rem;
  }
`

const Container = styled.div``

const Image = styled.img`
  max-width: 45rem;
  display: block;
  margin: 2rem auto;

  @media screen and (max-width: 42.5em) {
    max-width: 100%;
  }
`

const Quote = styled.q`
  font-family: 'Verona Lotte';
  font-size: 6rem;
  display: block;
  position: relative;
  text-align: center;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
  }

  &:after {
    position: absolute;
    right: 25px;
    bottom: 0;
  }

  @media screen and (min-width: 42.5em) {
    font-size: 7rem;

    &:before, &:after {
      position: static;
    }
  }

  @media screen and (min-width: 64.5em) {
    font-size: 8rem;
  }
`

const Link = styled.link`
  display: inline-block;
  color: var(--basic);
  font-weight: 600;

  &:hover {
    color: var(--pink);
    transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`

const AboutMe = () => (
  <Layout>
    <SEO title="About Jasebousbooks" />
    <div className="content">
      <Headline>About Jasebousbooks</Headline>
      <Container>
        <Image src="/images/jasebousbooks.jpg" alt="Jasebousbooks Bild" />
        <Quote>
          So many books, so little time
        </Quote>
        <p>
          <strong>Hi, ich bin Jasebousbooks <span aria-labelledby="wave emoji" role="img">👋🏻</span></strong><br />
        </p>
        <p>
          Eigentlich heiße ich Jasmin, bin 30 Jahre alt und komme gebürtig aus Köln.
          Seit 2019 lebe ich aber mit meinem Freund und zwei Kaninchen im schönen Leverkusen und genieße vollkommen das ländliche Leben, welches wir uns hier aufgebaut haben.<br />
          Beruflich hat es mich in die IT-Branche getrieben. Als ich mein Abitur gemacht hab wollte ich "unbedingt etwas mit Medien" machen, ein normales Studium wollte ich aber nicht. 
          Denn um ganz ehrlich zu sein, hatte ich nach 13 Jahren Schule genug von trockenem Unterricht. Ich suchte mir also eine Hochschule, die sich auf die praktische Lehrweise spezialisiert hat und hab nach 6 Semestern meinen Bachelor of Arts im Bereich Webdesign &amp; Development abgeschlossen. 
          Nach ein paar Agentur Erfahrungen arbeite ich seit 2018 als interne Frontend Entwicklerin in einem Baumarkt, wo ich die Shop Seite mit meinen Kollegen betreue.<br />
          An meinem Beruf liebe ich besonders das Rumtüfteln, denn die meiste Zeit sind wir Entwickler Problemlöser. Außerdem liebe ich es, Sachen aus dem Nichts zu erschaffen, welche sich die Menschen im Internet ansehen können.
        </p>
        <Image src="/images/hogwarts.jpg" alt="Hogwarts von der Warner Bros Studio Tour" />
        <p>
          Neben dem Entwickeln lese ich für mein Leben gerne. Zum Lesen kam ich schon als junges Mädchen. 
          Egal ob es bunte Kinderbücher oder später Tiger Team, TKKG oder Freche Mädchen Freche Bücher waren, mein Geschmack war schon immer breit gefächert und jedes Buch hat mich fasziniert zurückgelassen.<br/>
          Die große Liebe zum Fantasy Genre habe ich aber erst mit Harry Potter und Twilight entwickelt. 
          Harry Potter ist bis heute für mich eine der besten Jugendbuch Fantasy Reihen, die es gibt. 
          Zusammen war ich mit Harry, Ron und Hermine in Hogwarts, hab gegen Du-weißt-schon-wer gekämpft, viele Charaktere sterben sehen und um sie getrauert. 
          Wie du schon merkst, bin ich ein großer Potterhead und umso trauriger macht es mich zu sehen wie die Autorin diese Welt mit ihrer Einstellung beschmutzt.
        </p>
        <p>
          Denn im Gegensatz zu J.K. Rowling stehe ich für Weltoffenheit und Akzeptanz für Menschen, die anders sind als ich. 
          Deshalb lese ich seit 2019 vermehrt LGBTQIA+ Bücher, sowie BiPoc Romane, um mich stetig weiterzubilden sowie meinen Horizont zu erweitern.<br/>
          Neben dem Fantasy Genre lese ich auch sehr gerne YA/NA Romance Bücher und dabei habe ich festgestellt das ich auch ein totaler Jahreszeitenleser bin. 
          Während die Frühlingsgefühle Anfang des Jahres erwachen, greife ich gerne zu Romance Bücher und ab dem Herbst wieder vermehrt zu Fantasy/Science Fiction.
        </p>
        <Image src="/images/island.jpg" alt="Island 2017" />
        <p>
          Doch nicht nur das Lesen zählt zu meinen Hobbies, nein ich reise auch für mein Leben gerne. 
          Mit dabei natürlich immer mindestens ein Buch. Wegen dem Klimawandel greife ich aber seit einigen Jahren gerne auf umweltfreundlichere Reisealternativen zurück. 
          Wo ich noch vor Jahren fünfmal im Jahr im Urlaub war, und mein Motto war "Je weiter weg, desto besser", sehe ich das heutzutage mittlerweile anders und hinterfrage mein Reiseverhalten. 
          Ich reise immer noch, aber nicht mehr so oft und ich versuche, soweit es möglich ist mit dem Zug zu reisen.
        </p>
        <p>
        Wenn du mehr über mich erfahren möchtest oder du einfach neugierig bist dann schau doch auf meinem <Link as="a" target="_blank" href="https://instagram.com/jasebousbooks/">Instagram Kanal</Link> vorbei. Dort teile ich nicht nur meine Leidenschaft fürs Lesen, sondern auch meinen Alltag.
        </p>
      </Container>
    </div>
  </Layout>
)

export default AboutMe
