/*

    Typings

*/

export type Trigger =
	| 'return_home'
	| 'visit_pulsar'
	| 'visit_asteroid'
	| 'visit_planet';

export type Discipline =
	| 'Web Development'
	| 'Visualisation & Intelligence'
	| 'Complex Systems Analysis'
	| 'Data Engineering';

export interface Experience {
	year: number;
	title: string;
	description: string;
	link: string | undefined;
	image: string | undefined;
	disciplines: Discipline[];
}
