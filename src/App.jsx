import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas, Footer } from './components';

function App() {
	const [colorTheme, setColorTheme] = useState(
		localStorage.getItem('colorTheme') ? localStorage.getItem('colorTheme') : 'system'
	);
	const element = document.documentElement;
	const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');

	function handleColorTheme(e) {
		if (localStorage.colorTheme === 'dark' || (!('colorTheme' in localStorage) && mediaDark.matches)) {
			element.classList.add('dark');
		} else {
			element.classList.remove('dark');
		}
	}
	handleColorTheme();

	useEffect(() => {
		switch (colorTheme) {
			case 'dark':
				element.classList.add('dark');
				localStorage.setItem('colorTheme', 'dark');
				break;

			case 'light':
				element.classList.remove('dark');
				localStorage.setItem('colorTheme', 'light');
				break;

			default:
				localStorage.removeItem('colorTheme');
				handleColorTheme();
				break;
		}

		mediaDark.addEventListener('change', (e) => handleColorTheme(e));

		return () => mediaDark.addEventListener('change', handleColorTheme);
	}, [colorTheme]);

	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar colorTheme={colorTheme} setColorTheme={setColorTheme} />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
