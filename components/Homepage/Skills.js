import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { images } from '../../constants/Images';

const Skills = () => {
	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);
	return (
		<section id="skills">
			<h2>Skills</h2>
		</section>
	);
};

export default Skills;
