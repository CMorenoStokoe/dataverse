import './app.css';
import { useState, useEffect } from 'react';
import { Project, View } from './model/types';
import { portfolio } from './assets/cv';
import {
	StateMachineInput,
	useRive,
	useStateMachineInput,
} from '@rive-app/react-canvas';
import { Navigation } from './components/nav';
import { ProjectButtons } from './components/project-buttons';
import { ViewButtons } from './components/view-buttons';
import { Hero } from './components/hero';

export const App = () => {

	// Use a main view state to track the screen users are on
	const [currentView, setCurrentView] = useState<View>('Home');

	// Use a hero element so the user can focus on viewing projects in detail
	const [showHero, setShowHero] = useState<boolean>(false);
	const [currentHeroProject, setCurrentHeroProject] = useState<Project>(portfolio[0]);

	/** 
	 * * Animation
	 * Initialise a reactive animation that changes as the user navigates around the page
	*/

	// Detect mobile browser
	// @ts-ignore
	const desktopOrMobileAnimation = (navigator.userAgentData.mobile || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
		? 'starship_mobile.riv'
		: 'starship.riv';

	// Initialise animation component   
	const { rive, RiveComponent } = useRive(
		{
			src: desktopOrMobileAnimation,
			stateMachines: 'STATE_MACHINE',
			autoplay: true,
			onLoad: () => { },
		},
		{ fitCanvasToArtboardHeight: true }
	);

	// Map views to animations
	const animations: Record<View, StateMachineInput | null> = {
		'Home': useStateMachineInput(
			rive,
			'STATE_MACHINE',
			'return_home'
		),
		'Data Science': useStateMachineInput(
			rive,
			'STATE_MACHINE',
			'visit_asteroid'
		),
		'Web and Interface': useStateMachineInput(
			rive,
			'STATE_MACHINE',
			'visit_pulsar'
		),
		'Serious Games': useStateMachineInput(
			rive,
			'STATE_MACHINE',
			'visit_planet'
		),
	};

	// Play a new animation whenever the view changes
	useEffect(() => animations[currentView]?.fire(), [currentView])

	/**
	 * * Handle user inputs
	 * Handle what happens when users select views and projects on the page
	 */
	const handleBack = () => {
		if (showHero) {
			setShowHero(false);
		} else if (currentView !== 'Home') {
			setCurrentView('Home')
		}
	}
	const handleChangeProject = (project: Project) => {
		setCurrentHeroProject(project);
		setShowHero(true);
	}

	// Return main app element
	return (
		<div className='min-w-full h-full max-h-screen overflow-auto flex flex-col bg-black'>

			{/** 
			 * * Navigation 
			 * Nav bar with off-site links
			*/}
			<Navigation showBackButton={currentView !== 'Home'} onClick={handleBack} />

			{/** 
			 * * Content 
			 * Main content area
			*/}
			<div className="w-full h-full flex flex-col justify-center items-center">
				<div className="relative w-full">
					<p className="p-2 w-full text-neutral-500 absolute flex flex-row justify-center top-0">{currentView}</p>

					{/* Animated background*/}
					<RiveComponent />

					{/** Border for seamless blend into body */}
					<div className="w-full h-full p-1 border-black border-b-0 border-8 absolute inset-0 z-10"></div>

					{/**
			 * * Controls
			 * @returns Buttons for the user to select projects to view
			 */}
					{
						currentView === 'Home'
							? <ViewButtons views={['Data Science', 'Web and Interface', 'Serious Games']}
								currentView={currentView} onClick={setCurrentView} />
							: <ProjectButtons projects={portfolio.filter(x => x.tag === currentView)}
								onClick={handleChangeProject} />
					}

					{/**
				 * * Hero
				 * @returns A hero element
				 */}
					{
						showHero
							? <Hero project={currentHeroProject} onClick={handleBack} />
							: <div></div>
					}

				</div>
			</div>

		</div>
	);
};