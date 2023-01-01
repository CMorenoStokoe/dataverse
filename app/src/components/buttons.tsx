export const Btn = (props:{
    text: string;
    active: boolean;
    onClick: ()=>void;
}) => {
    return(
        <button role="button"
        onClick={props.onClick}
        className={`
            m-2 p-2 transition-all 
            bg-grey-100 text-black 
            ${props.active ? 'font-bold' : 'font-normal'} 
            hover:font-bold 
        `}>
            {props.text}
        </button>
    )
}