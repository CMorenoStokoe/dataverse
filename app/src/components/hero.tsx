import { Project } from "../model/types";

/**
    * * Hero
    * A pop up hero element to showcase projects
    * @params A central screen  with details showing a project
*/


//  Card detailing an experience
const Showcase = (props: { project: Project }) => {

    // Get video or image for portfolio item
    const embedMedia = (): JSX.Element | undefined => {
        if (props.project.image) {
            if (props.project.image!.includes('mp4') || props.project.image!.includes('webm')) {
                return <video autoPlay muted loop src={props.project.image} className='w-full h-auto max-h-96' />
            } else if (props.project.image) {
                return <img src={props.project.image} className='w-full h-auto max-h-96' alt={props.project.image} />
            };
        } else {
            return undefined;
        }
    }

    // Display as a card
    return (
        <div className='max-w-lg max-h-full p-4 m-2 overflow-y-auto flex flex-col justify-center items-center shadow bg-white rounded align-middle'>
            <p className="w-full font-display flex flex-row justify-between text-2xl">{props.project.title}
                <span className="text-neutral-500">{props.project.year}</span>
            </p>

            {/* Image / video */}
            {embedMedia()}

            {/* Description */}
            <div className="p-1 max-w-full overflow-x-auto flex flex-row justify-center items-center space-x-1">
                {(props.project.tech ?? [])
                    .map(x => <p className="p-1 px-2 text-xs text-white bg-violet-500 rounded-full">{x}</p>)
                }
            </div>

            <p className="">
                {props.project.description}
                <br />
                Link: <a className="text-violet-500" href={props.project.link} target='_blank'>{props.project.link}</a>
            </p>
        </div>
    )
}

export const Hero = (props: {
    project: Project;
    onClick: () => void;
}) => <div className="p-4 w-full h-full flex flex-row justify-center items-center absolute top-0 left-0 z-20 backdrop-blur-sm transition-all"
    onClick={props.onClick}>
        <Showcase project={props.project} />
    </div>