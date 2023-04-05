import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { github } from '../assets';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
				<div className="relative w-full h-[230px]">
					<img src={image} alt="name" className="w-full h-full object-cover rounded-2xl" />
					<div className="absolute inset-0 flex justify-end m-3 img-card_hover">
						<div
							className="black-gradient w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
							onClick={() => window.open(source_code_link, '_blank')}
						>
							<img src={github} className="w-1/2 h-1/2 object-contain" />
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px] line-clamp-4 hover:line-clamp-none">{description}</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>My works</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks
					like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create
					efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring
					your ideas to life!
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
			<div className="mt-10 text-center">
				<a
					href="https://github.com/iamsaief"
					target="_blank"
					className="px-6 py-2 font-sm text-base  bg-tertiary text-white rounded-full shadow-sm"
				>
					View more
				</a>
			</div>
		</>
	);
};

export default SectionWrapper(Works, '');
