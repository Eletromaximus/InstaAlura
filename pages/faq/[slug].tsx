import React from 'react'
import FAQQuestionScreen, { IFaqQuestion } from '../../src/components/screens/FAQQuestionScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function FAQInternaScreen ({ category, question }: IFaqQuestion) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  )
}

export default websitePageHOC(FAQInternaScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Pergunta X'
    }
  }
})

export async function getStaticProps ({ params }: any) {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json()
      return resposta.data
    })

  const dadosDaPagina = faqCategories.reduce((valorAcumulado: [], faqCategory: any) => {
    const foundQuestion = faqCategory.questions.find((question: any) => {
      if (question.slug === params.slug) {
        return true
      }
      return false
    })

    if (foundQuestion) {
      return {
        ...valorAcumulado,
        category: faqCategory,
        question: foundQuestion
      }
    }

    return valorAcumulado
  }, {})

  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title
        }
      }
    }
  }
}

export async function getStaticPaths () {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json()
      return resposta.data
    })

  const paths = faqCategories.reduce((valorAcumulado: [], faqCategory: any) => {
    const questionsPaths = faqCategory.questions.map((question: any) => {
      const questionSlug = question.slug
      return { params: { slug: questionSlug } }
    })

    return [
      ...valorAcumulado,
      ...questionsPaths
    ]
  }, [])

  return {
    paths,
    fallback: false
  }
}
