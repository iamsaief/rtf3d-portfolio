import React, { useEffect, useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { close, logo, menu, saiefLogo } from '../assets';
import { navLinks } from '../constants';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BiPlus, BiMenuAltRight } from 'react-icons/bi';

const themeOptions = [
	{
		icon: '<MdOutlineLightMode />',
		name: 'light',
	},
	{
		icon: '<MdOutlineDarkMode />',
		name: 'dark',
	},
	{
		icon: '<HiOutlineDesktopComputer />',
		name: 'system',
	},
];

const Navbar = ({ colorTheme, setColorTheme, isDark }) => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	const [themeMenuToggle, setThemeMenuToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 dark:bg-primary/90 bg-slate-800/90 transition duration-300 backdrop-blur border-b border-slate-50/[0.06]`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img src={saiefLogo} alt="logo" className="w-[140px] h-full object-contain" />
					{/* <p className="text-white text-[20px] font-bold cursor-pointer flex">
						<span className="font-light">&nbsp;|&nbsp;</span>
						<span className="sm:block">JS, React</span>
					</p> */}
				</Link>

				<ul className="list-none hidden sm:flex flex-1 justify-end flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? 'text-white' : 'text-secondary'
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div className="relative sm:ml-5">
					<div className="cursor-pointer text-slate-400 text-xl" onClick={() => setThemeMenuToggle(!themeMenuToggle)}>
						{colorTheme === 'light' && <MdOutlineLightMode className="text-sky-600" />}
						{colorTheme === 'dark' && <MdOutlineDarkMode className="text-sky-600" />}
						{colorTheme === 'system' &&
							(window.matchMedia('(prefers-color-scheme: dark)').matches ? (
								<MdOutlineDarkMode />
							) : (
								<MdOutlineLightMode />
							))}
					</div>
					<ul
						className={`${
							!themeMenuToggle ? 'hidden' : 'block'
						} absolute z-50 top-full right-[calc(50%_-_120px/2)] w-[120px] bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden  py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8`}
					>
						{themeOptions.map((mode) => (
							<li
								key={mode.name}
								className={`${
									colorTheme === mode.name ? 'text-sky-600' : null
								} text-sm font-medium cursor-pointer font-poppins py-1.5 px-3 flex items-center gap-x-2 hover:bg-slate-600/30`}
								onClick={() => {
									setThemeMenuToggle(!themeMenuToggle);
									setColorTheme(mode.name);
								}}
							>
								{mode.name === 'light' && (
									<>
										<MdOutlineLightMode className="text-lg" /> Light
									</>
								)}
								{mode.name === 'dark' && (
									<>
										<MdOutlineDarkMode className="text-lg" /> Dark
									</>
								)}
								{mode.name === 'system' && (
									<>
										<HiOutlineDesktopComputer className="text-lg" /> System
									</>
								)}
							</li>
						))}
					</ul>
				</div>

				{/* Mobile Navigation */}
				<div className="sm:hidden relative">
					<span className="cursor-pointer text-white/50 text-[28px]" onClick={() => setToggle(!toggle)}>
						{toggle ? <BiPlus className="rotate-[45deg]" /> : <BiMenuAltRight />}
					</span>
					<ul
						className={`${
							!toggle ? 'hidden' : 'block'
						} absolute z-50 top-full right-0 w-[120px] bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-7`}
					>
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title ? 'text-sky-600' : ''
								} text-sm font-medium cursor-pointer font-poppins hover:bg-slate-600/30`}
								onClick={() => {
									setToggle(!toggle);
									setActive(link.title);
								}}
							>
								<a href={`#${link.id}`} className="block py-2 px-3">
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
