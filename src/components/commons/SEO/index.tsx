import React from 'react'
import Head from 'next/head'

function SEO ({ headTitle }: any) {
  const hasHeadTitle = Boolean(headTitle)
  const pageTitleDefault = 'Instalura - Projeto Base do Alura Bootcamp'
  const description = 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'
  const image = 'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
  const urlBase = 'https://metatags.io/'
  const title = hasHeadTitle ? (`${headTitle} |  ${pageTitleDefault}`) : pageTitleDefault

  return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title}/>
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website"/>
			<meta property="og:url" content={urlBase} />
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={image} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={urlBase} />
			<meta property="twitter:title" content={title}/>
			<meta property="twitter:description" content={description}/>
			<meta property="twitter:image" content={image} />
		</Head>
  )
}

export default SEO
