import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setForm({ ...form, [name]: value });
	// };
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(form);
	// };

	// Formik Logics
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},

		// Validate form
		validationSchema: Yup.object({
			name: Yup.string().max(15, 'Name must be 15 characters or less. 🧐').required('Name is required 🙂'),
			email: Yup.string().email('Invalid email address. 👀').required('Email is required 😐'),
			message: Yup.string().min(10, 'Write 10 characters or more. 🙂').required("Don't you have anything to say? 🤨"),
		}),

		// Submit form
		onSubmit: (values) => {
			console.log('✅', values);

			setLoading(true);

			setTimeout(() => {
				setLoading(false);
				formik.resetForm();
			}, 1000);
		},
	});

	return (
		<div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
			<motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-xl">
				<p className={`${styles.sectionSubText}`}>Get in touch</p>
				<h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

				<form onSubmit={formik.handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span
							className={`font-medium mb-4 ${
								formik.touched.name && formik.errors.name ? 'text-pink-700' : 'text-white'
							}`}
						>
							{formik.touched.name && formik.errors.name ? formik.errors.name : 'Your Name'}
						</span>
						<input
							type="text"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Whats your name"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary/50 text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span
							className={`font-medium mb-4 ${
								formik.touched.email && formik.errors.email ? 'text-pink-700' : 'text-white'
							}`}
						>
							{formik.touched.email && formik.errors.email ? formik.errors.email : 'Your email'}
						</span>
						<input
							type="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Whats your email"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary/50 text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span
							className={`font-medium mb-4 ${
								formik.touched.message && formik.errors.message ? 'text-pink-700' : 'text-white'
							}`}
						>
							{formik.touched.message && formik.errors.message ? formik.errors.message : 'Your message'}
						</span>
						<textarea
							rows="6"
							name="message"
							value={formik.values.message}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Whats your message"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary/50 text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl shadow-md shadow-primary"
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
