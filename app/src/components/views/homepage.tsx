import { useState } from 'react';
import { SelectDisciplineBtn } from '../buttons';
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
    });
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

    
    const getRelevantItemsFromCV = (discipline:Discipline):JSX.Element => <div className='m-2 p-2 flex flex-col'>
        { 
            experience
                .filter(x=> x.disciplines.includes( discipline ))
                .map(x=> <ExperienceCard experience={x} key={x.description}/> )

        }
    </div>;


    /*

        DOM
        Draw components to the DOM
            
    */


    return (
        <div className='m-2 p-2 flex flex-col items-center animate__animated animate__flipInY'>
            <p>C Moreno Stokoe</p>
            <RiveComponent className='m-1 p-1 max-h-96 max-w-3xl min-h-36 h-full w-full'/>
            <div>
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
            { getRelevantItemsFromCV( currentView ) }
        </div>
    );

};