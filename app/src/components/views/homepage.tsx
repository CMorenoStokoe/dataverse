import { useState } from 'react';
import { SelectDisciplineBtn, Socials } from '../buttons';
import { Discipline, Experience, Trigger } from '../../model/types';
import { StateMachineInput, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { experience } from '../../assets/cv';
import { ExperienceCard } from '../cards';


/*

    Home page

*/


// Declare categories of discplines/experience we will filter my CV by
const discplines:Discipline[] = [
    'Web Development',
    'Visualisation & Intelligence',
    'Complex Systems Analysis',
    'Data Engineering'
];

// Then create the homepage
export const Homepage = ():JSX.Element => {
    const [currentView, setCurrentView] = useState<Discipline>('Web Development');


    /*

        ANIMATION
        Create an interactive animation that changes as the user clicks around the page

    */
   
    
    const { rive, RiveComponent } = useRive({
        src: 'starship.riv',
        stateMachines: 'STATE_MACHINE',
        autoplay: true,
        onLoad: () => {}
    },{fitCanvasToArtboardHeight: true} );
    const animations:Record<Discipline, StateMachineInput | null> = {
        'Web Development': useStateMachineInput(rive, 'STATE_MACHINE', 'return_home'),
        'Visualisation & Intelligence': useStateMachineInput(rive, 'STATE_MACHINE', 'visit_pulsar'),
        'Complex Systems Analysis': useStateMachineInput(rive, 'STATE_MACHINE', 'visit_planet'),
        'Data Engineering': useStateMachineInput(rive, 'STATE_MACHINE', 'visit_asteroid'),
    };
    const changeView = (newView:Discipline) => {
        switch(currentView){
            case newView: 
                break;
            case 'Web Development': 
                setCurrentView( newView );
                animations[newView]?.fire();
                break;
            default: 
                setCurrentView( newView );
                animations['Web Development']?.fire();
                setTimeout(()=>{ animations[newView]?.fire() }, 1250)
                break;
        }   
    }


    /*

        CV
        Show the relevant aspects of my CV depending on what the user has clicked on

    */

    
    const getRelevantItemsFromCV = (discipline:Discipline):JSX.Element => <div className='m-2 p-2 w-full flex flex-col'>
        { 
            experience
                .filter(x=> x.disciplines.includes( discipline ))
                .sort((a, b) => b.year - a.year )
                .map(x=> <ExperienceCard experience={x} key={x.description}/> )

        }
    </div>;


    /*

        DOM
        Draw components to the DOM
            
    */


    return (
        <div className='p-2 pt-0 max-w-3xl flex flex-col items-center'>

            {/* Header */}
            <nav className='p-2 w-full flex flex-row items-center justify-between'>
                <p className='mt-2 font-display text-black font-3xl'>C Moreno-Stokoe</p>
                <div>
                    <Socials href='https://www.linkedin.com/in/cmorenostokoe/' brand='linkedIn' />
                    <Socials href='https://github.com/CMorenoStokoe' brand='github' />
                    <Socials href='https://orcid.org/0000-0002-2865-0940' brand='orcid' />
                </div>
            </nav>

            {/* Animation */}
            <div className='m-1 p-1 w-full relative flex flex-col items-center'>
                <RiveComponent/>
                <div className='p-1 border-white border-b-0 border-8 w-full h-full absolute inset-0 z-10'></div>
            </div>

            {/* Navigation */}
            <div className='m-2 mb-0 p-2 pb-0 flex flex-row items-center justify-between bg-gradient-to-r from-gray-900 to-neutral-900 rounded-t'>
                <p className='text-gray-300 font-display text-xs'>
                    Set a destination ...
                </p>
                {
                    discplines.map(x=> 
                        <SelectDisciplineBtn 
                            discipline={x}
                            active={currentView === x} 
                            onClick={()=>{ changeView(x) }} 
                            key={x}
                        />
                    )
                }
            </div>
            
            {/* Content - CV */}
            <div className='m-2 mt-0 px-1 bg-gray-900'>
                <div className='p-2 bg-white'>
                    <p className='p-1 text-3xl font-display'>Experience</p>
                    { getRelevantItemsFromCV( currentView ) }
                </div>
            </div>
        </div>
    );

};