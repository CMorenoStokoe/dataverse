import { View } from "../model/types";

/**
    * * View buttons
    * Buttons for the user to select different views
    * @params Buttons for the user to press and select different views in the web app
*/

const buttonPositions: string[] = [
    "left-1/4 top-1/4",
    "left-1/2 top-1/4",
    "right-1/4 top-1/2"
]

const ViewButton = (props: {
    view: View;
    active: boolean;
    onClick: () => void;
    pos: string;
}) => <button className={"p-1 font-display drop-shadow leading-none text-violet-700 opacity-50 bg-black rounded-sm hover:opacity-100 sm:text-xl md:text-2xl text-neutral-400 transition-all absolute " + props.pos}
    onClick={props.onClick}>
        <p className="">
            {props.view}
        </p>
        <p className={'absolute font-alien invisible md:visible'}>
            {props.view}
        </p>
    </button>

export const ViewButtons = (props: {
    views: View[];
    currentView: View;
    onClick: (view: View) => void;
}) => <div className="p-4 w-full h-full absolute top-0 left-0 z-10 animate__animated animate__fadeIn animate__delay-1s">
        {
            props.views
                .map((x, i) => <ViewButton
                    key={'btn' + x + i}
                    view={x}
                    active={x === props.currentView}
                    onClick={() => props.onClick(x)}
                    pos={buttonPositions[i]}
                />)
        }
    </div>