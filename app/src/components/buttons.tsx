import { faLinkedin, faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Templates for buttons
export const ViewButton = (props: {
    text: string;
    onClick: () => void;
    active: boolean;
    pos: string;
}) => <button className={"font-display drop-shadow leading-none text-violet-700 hover:opacity-100 text-2xl text-neutral-400 transition-all absolute " + props.pos + (props.active ? ' opacity-100' : ' opacity-50')} onClick={props.onClick}>
        <p className="">
            {props.text}
        </p>
        <p className={`absolute font-alien ${props.active ? 'animate__animated animate__flash animate__infinite animate__slow' : ''}`}>
            {props.text}
        </p>
    </button>


export const NavButton = (props: {
    text: string | JSX.Element;
    onClick: () => void;
}) => <button className="p-2 pointer-events-auto font-display text-white hover:text-violet-600 text-2xl transition-all" onClick={props.onClick}>
        {props.text}
    </button>

export const SelectDisciplineBtn = (props: {
    discipline: string;
    active: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={props.onClick}
            className={`
            transition-all 
            ${props.active ? 'text-violet-600' : 'text-neutral-300'} 
            hover:text-violet-600 
        `}>
            <p className={'font-display'}>{props.discipline}</p>
            {props.active ?
                <p className={`
                    font-alien hidden lg:block 
                    ${props.active ? 'animate__animated animate__flash animate__infinite animate__slow' : ''} 
                `}>{props.discipline.concat(' is one of my skills')}</p>
                : ''
            }

        </button>
    )
}

export const Socials = (props: {
    href: string,
    brand: 'linkedIn' | 'github' | 'orcid'
}) => {
    const iconProp = () => {
        switch (props.brand) {
            case 'github': return (faGithub);
            case 'orcid': return (faOrcid);
            default: return (faLinkedin);
        }
    };

    return (
        <a className='m-1 text-rose-600 hover:text-violet-500' href={props.href}>
            <FontAwesomeIcon icon={iconProp()} />
        </a>
    )

}