import Head from "next/head"
import { useMachine } from "@xstate/react"
import Layout from "../components/Layout"
import HomeHero from "../components/Home/HomeHero"
import HomeSteps from "../components/Home/HomeSteps"
import learnJson from "../learn.json"
import { progressMachine } from "../machines/progressMachine"
import { useEffect } from "react"

export default function Home({ content, sections }) {
  const [progressState, progressSend, progressService] =
    useMachine(progressMachine)

  const stateValue = progressState.value
  console.log("PS", progressState.value)

  useEffect(() => {
    progressSend("SUBMIT_ANSWER")
  }, [progressSend, stateValue])

  return (
    <Layout>
      <HomeHero />

      <div className="flex flex-col min-h-screen py-2">
        <Head>
          <title>Real World Testing with Cypress</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            rel="stylesheet"
          />
        </Head>

        <main className="flex flex-col w-full flex-1 px-20">
          <HomeSteps sections={sections} content={content} />
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const sections = Object.keys(learnJson)
  return {
    props: {
      content: learnJson,
      sections,
    },
  }
}
