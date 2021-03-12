import React from 'react';
import FAQScreen, { IFaqScreen } from '../../src/screens/FAQScreen';

export default function FAQpage({ faqCategories }: IFaqScreen) {
	return <FAQScreen faqCategories={faqCategories} />;
}

export async function getStaticProps() {
	const faqCategories = await fetch(
		'https://instalura-api.vercel.app/api/content/faq'
	)
		.then((respostaDoServidor) => respostaDoServidor.json())
		.then((respostaConvertida) => respostaConvertida.data);

	return {
		props: {
			faqCategories,
		},
	};
}
