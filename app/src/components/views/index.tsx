import { useState } from 'react';
import { Btn } from '../buttons';
import { triggers } from '../../model/types';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

export const Homepage = () => {
    const [current, setCurrent] = useState<triggers>('return_home');

    // Hooks for Rive animation
    const { rive, RiveComponent } = useRive({
        src: 'starship.riv',
        stateMachines: 'STATE_MACHINE',
        autoplay: true
    });
    const returnHome = useStateMachineInput(rive, 'STATE_MACHINE', 'return_home');
    const visitPulsar = useStateMachineInput(rive, 'STATE_MACHINE', 'visit_pulsar');
    const visitPlanet = useStateMachineInput(rive, 'STATE_MACHINE', 'visit_planet');
    const visitAsteroid = useStateMachineInput(rive, 'STATE_MACHINE', 'visit_asteroid');

    const view = (t:triggers) => {
        const animation = (t:triggers) => { switch(t){
            case 'visit_pulsar': return visitPulsar;
            case 'visit_planet': return visitPlanet;
            case 'visit_asteroid': return visitAsteroid;
            default: return returnHome;
        }};

        if( t===current ){
            return
        } else if (current!== 'return_home'){
            setCurrent( t );
            returnHome?.fire();
            setTimeout(()=>{ animation(t)?.fire() }, 1250);
        } else {
            setCurrent( t );
            animation(t)?.fire();
        }        
    }

    return (
        <div className='m-2 p-2 flex flex-col items-center'>
            <p>C Moreno Stokoe</p>
            <RiveComponent className='max-h-96 max-w-3xl h-full w-full'/>
            <div>
                <Btn text='Data science' active={current==='return_home'} onClick={()=>{ view('return_home') }}/>
                <Btn text='Complex systems modelling' active={current==='visit_pulsar'} onClick={()=>{ view('visit_pulsar') }}/>
                <Btn text='Interaction design' active={current==='visit_planet'} onClick={()=>{ view('visit_planet') }}/>
                <Btn text='Scientific research' active={current==='visit_asteroid'} onClick={()=>{ view('visit_asteroid') }}/>
            </div>
            <div className='flex flex-row'>
            </div>
        </div>
    );

};