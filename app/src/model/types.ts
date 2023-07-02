/*

	Typings

*/

// Rive animation typings
export type Trigger =
	| 'return_home'
	| 'visit_pulsar'
	| 'visit_asteroid'
	| 'visit_planet';

// Main app navigation typings
export type View = 'Home' | 'Data Science' | 'Web and Interface' | 'Serious Games';

// CV item typings
export interface Project {
	year: number;
	title: string;
	description: string;
	link: string | undefined;
	image: string | undefined;
	tag: View;
	tech?: string[];
	highlight?: boolean;
}
