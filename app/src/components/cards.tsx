import { Experience } from "../model/types";

export const ExperienceCard = (props:{experience: Experience}) => {
    return(
        <div>
            <p>{props.experience.year}</p>
            <p>{props.experience.title}</p>
            <p>{props.experience.description}</p>
            <img src={props.experience.image}/>
        </div>
    )
}
