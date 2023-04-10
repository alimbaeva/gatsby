import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Carusel from "../components/carusel";
import ScrollY from "../components/scrollY";
import CardInfo from "../components/cardInfo";
import TextBlock from "../components/textBlock";
import Seo from "../components/seo"
import '../styles/index.modul.css'
// import * as styles from "../components/index.module.css"

const items = [
  {
    subtitle: 'Items__1',
    title: 'Title items-1',
    id: '1',
    img: './images/naute_1.avif',
    text: 'By setting initial={false} on AnimatePresence, components present when AnimatePresence first loads will start in their animate state.'
  },
  {
    subtitle: 'Items__2',
    title: 'Title items-2',
    id: '2',
    img: './images/naute_2.avif',
    text: 'By setting initial={false} on AnimatePresence, components present when AnimatePresence first loads will start in their animate state.'
  },
  {
    subtitle: 'Items__3',
    title: 'Title items-3',
    id: '3',
    img: './images/naute_3.avif',
    text: 'By setting initial={false} on AnimatePresence, components present when AnimatePresence first loads will start in their animate state.'
  },
  {
    subtitle: 'Items__4',
    title: 'Title items-4',
    id: '4',
    img: './images/naute_4.avif',
    text: 'By setting initial={false} on AnimatePresence, components present when AnimatePresence first loads will start in their animate state.'
  },
]

const IndexPage = () => (
  <Layout>
    <section id="block1" className="block">
      <h2>block1</h2>
      <Carusel />
    </section>
    <section id="block2" className="block">
      <h2>block2</h2>
      <CardInfo items={items}/>
    </section>
    <section id="block3" className="block">
      <h2>block3</h2>
      <ScrollY />
    </section>
    <section id="block4" className="block">
      <h2>block4</h2>
      <TextBlock />
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
