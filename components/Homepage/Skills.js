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
			<div className="flex flex-wrap gap-14 justify-center lg:justify-between  w-9/12 mx-auto">
				<motion.div className="grid grid-cols-4 gap-6 justify-center items-center" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
					<Frameworks />
				</motion.div>

				<div>
					{experiences.map((experience) => (
						<motion.div className="flex items-start gap-4" key={experience.year}>
							<p className="font-bold">{experience.year}</p>

							<motion.div className=" cursor-pointer">
								{experience.works.map((work) => (
									<>
										<motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} data-tip data-for={work.name} key={work.name}>
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
