import { Project } from "../model/types";
import { NavButton } from "./buttons";
import { useState } from 'react';

/**
    * * Options
    * Options for the user to select different projects to focus on
    * @params Buttons for the user to press and bring up details about specific projects
*/

const ProjectButton = (props: {
    project: Project;
    onClick: () => void;
}) => {

    // Get video or image for portfolio item
    const embedMedia = (): JSX.Element | undefined => {
        if (props.project.image) {
            if (props.project.image!.includes('mp4') || props.project.image!.includes('webm')) {
                return <video autoPlay muted loop src={props.project.image} className='w-full h-auto max-h-60' />
            } else if (props.project.image) {
                return <img src={props.project.image} className='w-full h-auto max-h-60' alt={props.project.image} />
            };
        } else {
            return undefined;
        }
    }

    return <button className={"m-2 rounded overflow-hidden bg-black font-display drop-shadow leading-none text-violet-500 opacity-50 hover:opacity-100 hover:transform hover:scale-125 md:text-lg text-neutral-400 transition-all "
        + (props.project.highlight ? ' border border-2 border-rose-600 ' : ' ')}
        onClick={props.onClick}>
        <p className="p-1 w-32 text-center flex flex-col justify-center items-center">
            <span className="text-rose-600">{props.project.highlight ? 'Highlight:' : ''}</span>
            {props.project.title}
        </p>

        {/* Image / video */}
        <div className="h-12 w-32">
            {embedMedia()}
        </div>
    </button>
}

export const ProjectButtons = (props: {
    projects: Project[];
    onClick: (project: Project) => void;
}) => {
    const [showButtons, setShowButtons] = useState<boolean>(false);
    return <div className="p-4 pb-24 w-full h-full absolute top-0 left-0 z-10 flex flex-wrap justify-center items-end animate__animated animate__fadeIn">
        {
            showButtons ?
                <div className="max-w-screen flex flex-row items-center">{
                    props.projects
                        .sort((a, b) => b.year - a.year)
                        .map(x => <ProjectButton
                            key={'btn' + x.title}
                            project={x}
                            onClick={() => { props.onClick(x) }}
                        />)
                }</div>
                : <div className="animate__animated animate__delay-5s animate__heartBeat animate__infinite">
                    <NavButton text='Show projects' onClick={() => setShowButtons(true)} />
                </div>
        }
    </div>
} 