import { Project } from '../model/types';

/*

	CV content

*/

export const portfolio: Project[] = [
	{
		year: 2023,
		title: 'PwC Resource Searcher',
		description:
			'An enterprise-grade data product used by a 4000-person business unit to match appropriate resources with client projects.',
		link: '',
		image: 'img/rs_promo.png',
		tag: 'Web and Interface',
		tech: ['React', 'GCP', 'Google Apps Script', 'BigQuery', 'JavaScript']
	},
	{
		year: 2023,
		title: 'Zyzyx - AI Game',
		description:
			'A space game where the AI is COMPLETELY in control! It will make up a story, track damage to your ship, and visualise anything remarkable you encounter.',
		link: 'https://zyzyx-quadrant.vercel.app/',
		image: 'promo/video-zyzyx.webm',
		tag: 'Serious Games',
		highlight: true,
		tech: ['ChatGPT', 'GPT functions', 'Stability.ai', 'SvelteKit', 'Vercel', 'JavaScript']
	},
	{
		year: 2022,
		title: 'Flourishing Online',
		description:
			'Flourishing Online is a five minute quiz that will give you a snapshot of your current wellbeing. Designed as part of ongoing efforts to empower students and staff in education to flourish.',
		link: 'https://www.morenostok.io/flourishing/',
		image: 'promo/video-flourishing.mp4',
		tag: 'Web and Interface',
		highlight: true,
		tech: ['D3', 'React', 'JavaScript']
	},
	{
		year: 2021,
		title: 'Games For Good',
		description:
			'Games for good is a catalogue of knowledge games which are helping us understand public health',
		link: '../g4g.html',
		image: 'promo/video-g4g.mp4',
		tag: 'Serious Games'
	},
	{
		year: 2021,
		title: 'MyGeoJSON',
		description:
			'A utility for population researchers to prepare GeoJSON map data for the UK from spreadsheets containing data by geographical area (LA & LSOA level)',
		link: 'https://www.morenostok.io/MyGeoJSON/',
		image: 'img/mygeojson_promo.PNG',
		tag: 'Web and Interface',
		tech: ['GeoJSON', 'JavaScript']
	},
	{
		year: 2021,
		title: 'OUTBREAK: COVID Game',
		description:
			'Players explored the complexities of public health policy making during the COVID-19 outbreak',
		link: 'https://outbreak.endcoronavirus.org/',
		image: 'promo/video-outbreak.mp4',
		tag: 'Serious Games',
		tech: ['React', 'GitHub', 'AWS S3', 'CI/CD', 'JavaScript'],
		highlight: true
	},
	{
		year: 2021,
		title: 'COVID Simulation',
		description:
			'Players explored the complexities of public health policy making during the COVID-19 outbreak',
		link: 'http://pandemic-game-prod.s3-website.us-east-2.amazonaws.com/',
		image: 'promo/video-policy.mp4',
		tag: 'Serious Games',
		tech: ['JavaScript']
	},
	{
		year: 2023,
		title: 'MENDEL: Citizen Science Game',
		description:
			'Players implicitly learn the complexity of network data in Genetic Epidemiology. Play as a public health policy maker and intervene on factors such as smoking, exercise and socialisation in order to improve the health of a simulated nation. We used an accurate propagation model and genetic data to build a realistic simulation, as cmplx as the real-life situation.',
		link: 'https://www.morenostok.io/mendel',
		image: 'promo/video-mendel.mp4',
		tag: 'Serious Games',
		highlight: true,
		tech: ['D3', 'Network / Graph Theory', 'JavaScript']
	},
	{
		year: 2020,
		title: 'COVID Response Map Wales',
		description:
			'As a team we produced a map which helps policy makers and public health experts identify the areas in Wales most vulnerable to COVID-19.',
		link: 'https://covidresponsemap.wales/',
		image: 'img/covidcomms-map.jpg',
		tag: 'Web and Interface',
		highlight: true,
		tech: ['MapBox', 'GeoJSON', 'JavaScript']
	},
	{
		year: 2020,
		title: 'MiRANA: Network Visualisation Tool',
		description:
			'This easy-to use tool produces accurate network visualisations of interrelated data in genetic epidemiology. Simply upload your data and press "produce graph" to produce a publication-quality graphic that can be used for exploratory and confirmatory analyses.',
		link: '../mirana/index.html',
		image: 'img/mrnv_promo.PNG',
		tag: 'Web and Interface',
		tech: ['D3', 'JavaScript']
	},
	{
		year: 2019,
		title: 'GP Virtual Assistant',
		description:
			'This virtual assistant was deployed and improved in an iterative design loop in response to patient feedback over a period of 6 months. By the end of this process, the GPVirtualAssistant was a fully functioning online-triage system consistently used by patients to relieve the burden on the largest general practice in the county.',
		link: '../GPVirtualAssistant/index.html',
		image: 'img/gpva_promo.PNG',
		tag: 'Web and Interface',
		tech: ['HTML', 'CSS']
	},
	{
		year: 2019,
		title: 'Visualising Data Reliability',
		description:
			'This visualisation demonstrates the impact of publication bias how researcher degrees of freedom can lead to over a hundred thousand different results from one study. A second version was presented at a regional academic conference (ESRC SWDTP conference).',
		link: '../bilingualism2/index.html',
		image: 'img/bilingualism_promo.PNG',
		tag: 'Web and Interface',
		tech: ['SVG', 'HTML', 'JavaScript']
	},
	{
		year: 2023,
		title: 'PhD thesis',
		description:
			'Moreno-Stokoe, C.M. (2023) Visual and gamified approaches to understanding complex causal networks in human health',
		link: 'https://hdl.handle.net/1983/fe220f65-ae14-4067-9825-ab53e6db3c3b',
		image: 'img/paper_thesis.png',
		tag: 'Data Science',
		highlight: true
	},
	{
		year: 2021,
		title: 'Publication in The Lancet',
		description:
			'Song, J., Moreno-Stokoe, C., Grey, C., & Davies, A. R. (2021). Individuals with lived experience of homelessness and their COVID-19 outcomes in Wales: a data linkage study. The Lancet, 398, S81.',
		link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02624-6/fulltext',
		image: 'img/paper_lancet.png',
		tag: 'Data Science',
		highlight: true
	},
	{
		year: 2022,
		title: 'National Report for Public Health Wales',
		description:
			'Song J, Moreno-Stokoe C, Grey CNB, Davies AR. (2021). Health of individuals with lived experience of homelessness in Wales, during the COVID-19 pandemic. Cardiff: Public Health Wales.',
		link: 'https://phw.nhs.wales/publications/publications1/health-of-individuals-with-lived-experience-of-homelessness-in-wales-during-the-covid-19-pandemic-report/',
		image: 'img/paper_homeless.jpg',
		tag: 'Data Science',
		highlight: true
	},
	{
		year: 2021,
		title: 'Publication in International Journal of Epidemiology',
		description:
			' Woolf, B., Di Cara, N., Stokoe, C. M., Skrivankova, V., Drax, K., Higgins, J., ... & Richmond, R. (2021). Investigating the transparency of reporting in two-sample summary data Mendelian randomization studies. medRxiv.',
		link: 'https://www.medrxiv.org/content/10.1101/2021.10.15.21264972.abstract',
		image: 'img/paper_thesis.png',
		tag: 'Data Science',
	},
	{
		year: 2020,
		title: 'Publication in Journal of Population Data Science',
		description:
			'Di Cara, N. H., Song, J., Maggio, V., Moreno-Stokoe, C., Tanner, A. R., Woolf, B., ... & Davies, A. (2020). Mapping population vulnerability and community support during COVID-19: a case study from Wales. International journal of population data science, 5(4).',
		link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8104153/',
		image: 'img/paper_covidcomms.png',
		tag: 'Data Science',
	},
	{
		year: 2020,
		title: 'Publication in Frontiers',
		description:
			'Moreno-Stokoe, C. M., & Damian, M. F. (2020). Employing Natural Control for Confounding Factors in the Hunt for the Bilingual Advantage in Attention: Evidence from School Children in Gibraltar. Journal of cognition, 3(1).',
		link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/pmc7082826/',
		image: 'img/paper_bilingual.png',
		tag: 'Data Science',
	},
];

const awards = [
	{
		year: 2023,
		title: 'Award',
		description: 'PwC GEM Highest Achievers (January, February)',
		link: undefined,
		image: undefined,
	},
	{
		year: 2019,
		title: 'Award',
		description:
			'Jean Golding Institute Beauty of Data competition runner-up',
		link: undefined,
		image: undefined,
	},
	{
		year: 2018,
		title: 'Funding grant',
		description:
			'Brigstow Highlight Call Living with Technology (for GP Virtual Assistant)',
		link: undefined,
		image: undefined,
	},
	{
		year: 2018,
		title: 'Funding grant',
		description:
			'Bristol Research and Enterprise Division New Enterprise Competition Round 1',
		link: undefined,
		image: undefined,
	},
	{
		year: 2018,
		title: 'Award',
		description:
			'Economic and Social Research Council SWDTP annual conference research prize winner',
		link: undefined,
		image: undefined,
	},
	{
		year: 2017,
		title: 'Award',
		description:
			'Experimental Psychology Society (EPS) Advancement of Science Award nominee',
		link: undefined,
		image: undefined,
	},
	{
		year: 2017,
		title: 'Award',
		description:
			'Highest overall dissertation mark University of Bristol BSc Experimental Psychology',
		link: undefined,
		image: undefined,
	},
];
