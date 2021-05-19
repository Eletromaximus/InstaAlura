import React from 'react'
import FAQScreen, { IFaqScreen } from '../../src/components/screens/FAQScreens/FAQScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function FAQpage ({ faqCategories }: IFaqScreen) {
  return <FAQScreen faqCategories={faqCategories} />
}

export default websitePageHOC(FAQpage)

export async function getStaticProps () {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq'
  )
    .then((respostaDoServidor) => respostaDoServidor.json())
    .then((respostaConvertida) => respostaConvertida.data)

  return {
    props: {
      faqCategories
    }
  }
}
