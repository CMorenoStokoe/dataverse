import { experience } from '../assets/cv';
import { Discipline, Experience } from '../model/types';

/**
    * * CV items
    * Components presenting items of experience using information from the CV
    Show the relevant aspects of my CV depending on what the user has clicked on
    * @params props contains experience items and discipline categories
*/

//  Card detailing an experience
const ExperienceCard = (props: { experience: Experience }) => {
    const embedMedia = (): JSX.Element | undefined => {
        if (props.experience.image) {
            if (props.experience.image!.includes('mp4')) {
                return <video autoPlay muted src={props.experience.image} className='p-2 max-w-xs w-full h-auto' />
            } else if (props.experience.image) {
                return <img src={props.experience.image} className='p-2 max-w-xs w-full h-auto' />
            };
        } else {
            return undefined;
        }
    }
    return (
        <div className='p-2 my-4 w-full shadow border rounded border-b-2'>
            <div className='flex flex-row w-full'>

                {/* Left: Image */}
                <div className='w-1/3'>
                    {embedMedia()}
                </div>

                {/* Right: Description */}
                <div className='w-2/3'>
                    <div className='flex flex-row justify-between'>
                        <p className='font-display'>{props.experience.title}</p>
                        <p className='text-rose-600'>{props.experience.year}</p>
                    </div>
                    <p>{props.experience.description}</p>
                </div>
            </div>
        </div>
    )
}

// A component that compiles multiple experiences with a certain discipline 
export const FilteredCV = (props: {
    discipline: Discipline
}): JSX.Element => {
    const experienceInSelectedDiscipline = experience
        .filter((x) => x.disciplines.includes(props.discipline))
        .sort((a, b) => b.year - a.year)
        .map((x) => (
            <ExperienceCard experience={x} key={x.description} />
        ));
    return (
        <div className='w-full flex flex-col'>
            <div className='p-2 bg-white'>
                <p className='p-1 text-3xl font-display'>Experience</p>
                {experienceInSelectedDiscipline}
            </div>
        </div>
    )
};