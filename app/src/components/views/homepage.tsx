import { useState } from 'react';
import { SelectDisciplineBtn, Socials } from '../buttons';
import { Discipline } from '../../model/types';
import { FilteredCV } from '../cards';
import { Animation } from '../animation';

/*

    Home page

*/

// Declare categories of discplines/experience we will filter my CV by
const discplines: Discipline[] = [
    'Web Development',
    'Visualisation & Intelligence',
    'Complex Systems Analysis',
    'Data Engineering',
];

// Then create the homepage
export const Homepage = (): JSX.Element => {
    const [currentView, setCurrentView] = useState<Discipline>('Web Development');

    // Create controls for user to select different views within this page
    const buttonsToSetViews = () => discplines.map((x) => (
        <SelectDisciplineBtn
            discipline={x}
            active={currentView === x}
            onClick={() => {
                setCurrentView(x);
            }}
            key={x}
        />
    ));

    return (
        <div className='p-2 pt-0 max-w-3xl flex flex-col items-center' >

            {/* Animation window */}
            <Animation currentView={currentView} />

            {/** Control panel */}
            <div className='p-2 bg-gradient-to-r from-gray-200 to-gray-300'>

                {/* Controls to select view */}
                <div className='w-full max-w-full overflow-auto'>
                    <p> Set destination ... </p>
                    <div className='flex flex-row justify-between items-end'>
                        {buttonsToSetViews()}
                    </div>
                </div>

                {/* Filtered CV results by view */}
                <FilteredCV discipline={currentView} />

            </div>

        </div >
    );
};
