import { Discipline } from "../model/types";
import { faLinkedin, faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    
export const SelectDisciplineBtn = (props:{
    discipline: Discipline;
    active: boolean;
    onClick: ()=>void;
}) => {
    return(
        <button role="button"
        onClick={props.onClick}
        className={`
            m-2 mb-0 p-3 transition-all 
            text-sm 
            ${props.active ? 'text-violet-600' : 'text-gray-200'} 
            ${props.active ? 'bg-white' : 'bg-neutral-900'} 
            hover:text-violet-600 hover:bg-white 
            rounded-t-md 
        `}>
            <p className={'font-display'}>{ props.discipline }</p>
            { props.active ? 
                <p className={`
                    font-alien text-xs
                    ${props.active ? 'animate__animated animate__flash animate__infinite animate__slow' : ''} 
                `}>{ props.discipline.concat(' is one of my skills') }</p> 
                : ''
            }
            
        </button>
    )
}

export const Socials = (props:{
    href: string,
    brand: 'linkedIn' | 'github' | 'orcid'
}) => {
    const iconProp = () => {
        switch( props.brand ){
            case 'github' : return( faGithub );
            case 'orcid' : return( faOrcid );
            default : return( faLinkedin );
        } 
    };

    return(
        <a className='m-1 text-rose-600 hover:text-violet-500' href={props.href}>
            <FontAwesomeIcon icon={ iconProp() } />
        </a>
    )

}