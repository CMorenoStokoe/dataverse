import { useState } from 'react';
import { Socials } from './components/buttons';
import { CV } from './components/views/cv';
import { Homepage } from './components/views/homepage';
import { Splash } from './components/views/splash';

export const App = () => {
	const [activePage, setActivePage] = useState<'Splash' | 'Homepage' | 'CV'>('Homepage');

	// Create controls for the user to navigate pages
	const currentPage = () => {
		switch (activePage) {
			case 'CV': return <CV />
			case 'Splash': return <Splash />
			default: return <Homepage />
		}
	}

	return (
		<div className={`App 
			font-body 
			text-xs md:text-sm lg:text-base 
		`}>

			{/** Header */}
			<nav className='p-2 w-full flex items-center justify-between fixed bg-white'>
				<p className='mt-2 font-display text-black'>
					C Moreno-Stokoe
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
				</div>
			</nav>

			{/* Body */}
			<div className='pt-10 flex justify-center'>
				{currentPage()}
			</div>
		</div>
	);
};