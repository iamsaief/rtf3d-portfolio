import { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { ThemeContext } from './ThemeContext';

const ExperienceCard = ({ experience }) => {
	const { colorTheme } = useContext(ThemeContext);
	const formatteBg =
		colorTheme === 'dark' || (colorTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
			? '#1d1836'
			: 'rgb(15 23 42 / 40%)';

	return (
		<VerticalTimelineElement
			contentStyle={{ background: `${formatteBg}`, color: '#fff' }}
			contentArrowStyle={{ borderRight: `7px solid ${formatteBg}` }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-white/50 text-[16px] font-semibold !m-0">{experience.company_name}</p>
				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points.map((point, index) => (
						<li key={`experience-point-${index}`} className="text-white/80 text-[14px]pl-1 ">
							{point}
						</li>
					))}
				</ul>
			</div>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>What I have done so far</p>
				<h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
