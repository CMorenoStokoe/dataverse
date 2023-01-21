import { Discipline } from "../model/types";

export const SelectDisciplineBtn = (props:{
    discipline: Discipline;
    active: boolean;
    onClick: ()=>void;
}) => {
    return(
        <button role="button"
        onClick={props.onClick}
        className={`
            m-2 p-3 transition-all 
            font-display tracking-wider 
            ${props.active ? 'text-white' : 'text-gray-300'}
            ${props.active ? 'bg-primary-600' : 'bg-primary-500'}
            hover:text-white hover:bg-primary-600 
            rounded-md
        `}>
            {props.discipline}
        </button>
    )
}