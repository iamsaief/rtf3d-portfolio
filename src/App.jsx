import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, About, Tech, Experience, Works, Feedbacks, Contact, StarsCanvas, Footer } from './components';
import { ThemeProvider } from './components/ThemeContext';

export const ThemeContext = createContext();

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<div className="relative z-0 dark:bg-primary bg-slate-800">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
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
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
