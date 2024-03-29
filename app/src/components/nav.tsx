import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavButton, Socials } from "./buttons";

/**
    * * Navigation
    * Navigation bar to show at the head of the web page
    * @params Nav element with links to social media
*/

export const Navigation = (props: {
    showBackButton: boolean;
    onClick: () => void;
}) => <nav className="p-1 w-full flex flex-row justify-between items-center z-40">
        {/* Back button */}
        {
            props.showBackButton
                ? <NavButton text={<p className="flex flex-row justify-center items-center space-x-2">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </p>} onClick={props.onClick} />
                : <div className="opacity-0 p-2 pointer-events-none font-display text-2xl"><FontAwesomeIcon icon={faArrowLeft} /> Back</div>
        }
        <div className="w-full flex flex-col justify-center items-center">
            <p className="font-display text-xl text-white cursor-pointer hover:text-violet-600">
                Dr.Chris Moreno-Stokoe
            </p>
            <div>
                <Socials
                    href='https://www.linkedin.com/in/cmorenostokoe/'
                    brand='linkedIn'
                />
                <Socials
                    href='https://github.com/CMorenoStokoe'
                    brand='github'
                />
                <Socials
                    href='https://orcid.org/0000-0002-2865-0940'
                    brand='orcid'
                />
                <Socials href="https://dribbble.com/Cmorenostokoe" brand="dribbble" />
                <Socials href="https://unsplash.com/@stokio" brand="unsplash" />
                <Socials href="https://cmorenostokoe.itch.io" brand="itch.io" />
            </div>
        </div>
        <p className="w-32 text-center text-xs text-neutral-500 cursor-pointer hover:text-violet-600">
            🧪 Rive.js, React
        </p>
    </nav>