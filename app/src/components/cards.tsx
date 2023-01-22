import { Experience } from "../model/types";


/*

    Card explaining experience on CV


*/


export const ExperienceCard = (props:{experience: Experience}) => {
    const embedMedia = ():JSX.Element | undefined => {
        if( props.experience.image ){
            if( props.experience.image!.includes('mp4') ){
                return <video autoPlay muted src={props.experience.image} className='p-2 max-w-xs w-auto h-auto' />
            } else if( props.experience.image ){
                return <img src={props.experience.image} className='p-2 max-w-xs w-auto h-auto' />
            };
        } else {
            return undefined;
        }
    }
    return(
        <div className='p-2 my-4 w-full font-body shadow border rounded border-b-2'>
            <div className='flex flex-row w-full'>

                {/* Left: Image */}
                { embedMedia() }
                
                {/* Right: Description */}
                <div className='w-full'>
                    <div className='flex flex-row justify-between'>
                        <p className='font-display'>{props.experience.title}</p> 
                        <p className='text-rose-600'>{props.experience.year}</p>
                    </div>
                    <p>{props.experience.description}</p>
                </div>
            </div>
        </div>
    )
}
