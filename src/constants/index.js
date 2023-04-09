import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	threejs,
	joomshaper,
	helloacademy,
	globe,
	tutorlms,
	tutorstarter,
	themeum_themes,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Frontend Engineer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: mobile,
	},
	{
		title: 'Web Developer',
		icon: backend,
	},
	{
		title: 'UI Developer',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	// {
	// 	name: 'TypeScript',
	// 	icon: typescript,
	// },
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	// {
	// 	name: 'docker',
	// 	icon: docker,
	// },
];

const experiences = [
	{
		title: 'Software Engineer',
		company_name: 'JoomShaper',
		icon: joomshaper,
		iconBg: '#ffffff',
		date: 'Sept 2021 - Oct 2022 ',
		points: [
			'Led the frontend development team. Developed new features according to design, delivered quick responses to consumer feature requests. Regardless of the frontend or backend, WordPress issues have been analyzed and provided fixes. ',
			'Developed design system and actively contributed to the core of Tutor LMS 2.X.X.',
			'Implementing responsive design and ensuring cross-browser compatibility. Transferring design into production-ready WordPress plugins and themes 24x7',
			'Developing and maintaining web applications using vanilla JS, React.js, SASS/SCSS, HTML, PHP and other related technologies. ',
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'JoomShaper',
		icon: joomshaper,
		iconBg: '#ffffff',
		date: 'Jun 2019 - Aug 2021 ',
		points: [
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Actively collaborated to develop up-and-running WordPress plugins, building, updating and fixing features & UIs.',
			'Worked on Page Builder tools and Qubely & Tutor LMS, popular flagship plugins, as a Frontend Developer. ',
			'Built new features, fixing bugs & updating UI/UX issues.',
		],
	},
	{
		title: 'Freelance Web Designer',
		company_name: 'Online/Offline',
		icon: globe,
		iconBg: '#ffffff',
		date: 'Feb 2018 - Jun 2019',
		points: [
			"Developed web interfaces as per client's requirement. Updated and fixed bugs on client's website. Provided customer support.",
		],
	},
	{
		title: 'Frontend Developer',
		company_name: 'Hello Academy',
		icon: helloacademy,
		iconBg: '#ffffff',
		date: 'Feb 2017 - Dec 2017',
		points: [
			'Worked on HTML templates, WordPress theme development. Trained and guided 7 interns how to build scalable UI.',
			'Gained appreciation for presentation skills, being calm & cool-headed teammate.',
		],
	},
];

const testimonials = [
	{
		testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Saief me wrong.',
		name: 'Jhane Doe',
		designation: 'CEO',
		company: 'JoomShaper',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Saief does.",
		name: 'Chris Brown',
		designation: 'CDO',
		company: 'JoomShaper',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial: "After he redesigned Tutor LMS v2.x.x, our traffic increased by 50%. We can't thank him enough!",
		name: 'Shoan Mandes',
		designation: 'Software Engineer, Lead',
		company: 'JoomShaper',
		image: 'https://randomuser.me/api/portraits/men/6.jpg',
	},
];

const projects = [
	{
		name: 'Tutor LMS',
		description:
			'A complete WordPress LMS plugin to create any e-learning website easily. Tutor LMS, the most powerful WordPress LMS plugin to kickstart your online classroom. Learning management system for all',
		tags: [
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'green-text-gradient',
			},
			{
				name: 'React',
				color: 'pink-text-gradient',
			},
			{
				name: 'SASS/SCSS',
				color: 'orange-text-gradient',
			},
		],
		image: tutorlms,
		source_code_link: 'https://github.com/themeum/tutor',
		live_link: 'https://www.themeum.com/product/tutor-lms/',
	},
	{
		name: 'Tutor Starter',
		description:
			'A Free eLearning Theme to Power Sites of All Shapes and Sizes. Tutor Starter is a WordPress LMS theme. For marketplaces, solo instructors, academic institutions, and anything in between!',
		tags: [
			{
				name: 'PHP',
				color: 'blue-text-gradient',
			},
			{
				name: 'WordPress',
				color: 'orange-text-gradient',
			},
			{
				name: 'React',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: tutorstarter,
		source_code_link: 'https://github.com/themeum/tutorstarter',
		live_link: 'https://www.themeum.com/product/tutorstarter/',
	},
	{
		name: 'WordPress Themes',
		description:
			'Explore our collection of WordPress Themes for business, blogs, portfolio. We are offering Responsive onepage WordPress Theme and Multipurpose WordPress Template. Also, download the most popular Crowdfunding & Fundraising WordPress Themes and Premium WordPress WooCommerce Theme.',
		tags: [
			{
				name: 'WordPress',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'green-text-gradient',
			},
			{
				name: 'JavaScript',
				color: 'pink-text-gradient',
			},
			{
				name: 'CSS/SCSS',
				color: 'orange-text-gradient',
			},
		],
		image: themeum_themes,
		source_code_link: 'https://www.themeum.com/wordpress-themes/',
	},
];

export { services, technologies, experiences, testimonials, projects };
