import { Discipline } from "../model/types";
import { faLinkedin, faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SelectDisciplineBtn = (props: {
    discipline: Discipline;
    active: boolean;
    onClick: () => void;
}) => {
    return (
        <button role="button"
            onClick={props.onClick}
            className={`
            mr-1 p-2 h-full transition-all 
            ${props.active ? 'text-violet-600' : 'text-gray-200'} 
            ${props.active ? 'bg-white' : 'bg-gray-400'} 
            hover:text-violet-600 hover:bg-white 
            rounded-t-md 
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