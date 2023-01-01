import { experience } from "../model/types";

const ExperienceItem = (props:experience) => {
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <img src={props.image}/>
        </div>
    )
}

const ExperienceItemsByYear = (props:{
    year: number;
    items: JSX.Element;
}) => {
    return(
        <div className='m-2 p-2 flex flex-row'>
            <div className='h-100 pr-2 border-r'>
                {props.year}
            </div>
            <div className='p-2'>
                {props.items}
            </div>
        </div>
    )
}