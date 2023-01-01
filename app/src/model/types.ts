export type triggers = 'return_home' | 'visit_pulsar' | 'visit_asteroid' | 'visit_planet';

export interface experience {
    year: number;
    title: string;
    description: string;
    link: string | null;
    image: string | null;
    category?: 'data science' | 'website development'
};