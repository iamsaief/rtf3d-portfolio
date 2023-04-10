import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
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

	return <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>{props.children}</ThemeContext.Provider>;
};
