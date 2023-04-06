import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { close, codeIcon, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					{/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
					<img
						src={codeIcon}
						alt="logo"
						className="w-[28px] h-[28px] object-contain bg-white border border-white/50 shadow-[0_0_15px_0px_rgba(21,16,48 ,0.65)]"
					/>
					<p className="text-white text-[20px] font-bold cursor-pointer flex">
						Saief <span className="font-light">&nbsp;|&nbsp;</span>
						<span className="sm:block">JS, React</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
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

				{/* Mobile Navigation */}
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="Mobile menu icon"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-20 right-0 min-w-[140px] z-10 rounded-xl mx-4 my-2`}
					>
						<ul className="list-none flex flex-col justify-end items-start gap-4">
							{navLinks.map((link) => (
								<li
									key={link.id}
									className={`${
										active === link.title ? 'text-white' : 'text-secondary'
									} hover:text-white text-base font-medium cursor-pointer font-poppins`}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
