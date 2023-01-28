import {
    StateMachineInput,
    useRive,
    useStateMachineInput,
} from '@rive-app/react-canvas';
import { Discipline } from '../model/types';

/** 
    * * ANIMATION
    * Create an interactive animation that changes as the user clicks around the page
    params 
    * @param props inherits currentView from parent (Homepage)
*/

export const Animation = (props: {
    currentView: Discipline
}): JSX.Element => {

    // Animation component
    const { rive, RiveComponent } = useRive(
        {
            src: 'starship.riv',
            stateMachines: 'STATE_MACHINE',
            autoplay: true,
            onLoad: () => { },
        },
        { fitCanvasToArtboardHeight: true }
    );

    // States the animation component can be in
    const animations: Record<Discipline, StateMachineInput | null> = {
        'Web Development': useStateMachineInput(
            rive,
            'STATE_MACHINE',
            'return_home'
        ),
        'Visualisation & Intelligence': useStateMachineInput(
            rive,
            'STATE_MACHINE',
            'visit_pulsar'
        ),
        'Complex Systems Analysis': useStateMachineInput(
            rive,
            'STATE_MACHINE',
            'visit_planet'
        ),
        'Data Engineering': useStateMachineInput(
            rive,
            'STATE_MACHINE',
            'visit_asteroid'
        ),
    };

    // 
    animations[props.currentView]?.fire();

    return (
        // Container for animation (it inherits its dimensions)
        <div className="h-full w-full relative">

            {/** Animation */}
            <RiveComponent />

            {/** Border for seamless blend into body */}
            <div className="p-1 border-white border-b-0 border-8 w-full h-full absolute inset-0 z-10"></div>
        </div>
    );
};
