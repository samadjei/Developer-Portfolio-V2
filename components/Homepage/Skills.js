import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import Frameworks from '../../constants/Frameworks';
import Headers from '../../constants/Headers';

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
		<section className="pb-24" id="skills">
			<Headers title="Skills" />
			<div className="app__skills-container flex flex-wrap gap-14 justify-between w-9/12 mx-auto">
				<Frameworks />

				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div className="flex items-start gap-4" key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="font-bold">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works cursor-pointer">
								{experience.works.map((work) => (
									<>
										<motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" data-tip data-for={work.name} key={work.name}>
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
										<ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip">
											{work.desc}
										</ReactTooltip>
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
