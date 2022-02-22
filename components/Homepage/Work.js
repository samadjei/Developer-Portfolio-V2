import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Headers from '../../constants/Headers';

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === 'All') {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<section id="work" className="pb-28">
			<Headers title="Projects" />
			<div className="flex justify-center gap-6 pb-16 cursor-pointer ">
				{['JavaScript', 'React JS', 'All'].map((item, index) => (
					<div key={index} onClick={() => handleWorkFilter(item)} className={`rounded bg-button text-button-text flex place-items-center py-2 px-4 ${activeFilter === item ? ' bg-tertiary text-headline' : ''}`}>
						{item}
					</div>
				))}
			</div>

			<motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="grid  md:grid-cols-2 items-center gap-8 auto-collums-fr gap-y-14 min-h-full">
				{filterWork.map((work, index) => (
					<div className="bg-card-bg rounded text-card-text h-full" key={index}>
						<div>
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						</div>
						<div className="py-8 px-8 flex flex-col gap-4">
							<div className="flex flex-col gap-4">
								<h4 className="text-lg font-bold text-section-headline ">{work.title}</h4>
								<p>{work.description}</p>
							</div>
							<div className="flex gap-4 flex-1 items-end">
								<span>Live site:</span>
								<a target="_blank" rel="noopener noreferrer" href={work.projectLink}>
									<FiExternalLink className="text-2xl" />
								</a>
								<div className="flex gap-2">
									<span>Repo:</span>
									<a target="_blank" rel="noopener noreferrer" href={work.codeLink}>
										<FiGithub className="text-2xl" />
									</a>
								</div>
							</div>
						</div>
						{/* <div className="flex gap-4">
								{[work.categories].map((works, index) => (
									<div className="flex gap-4" key={index}>
										<p>{works}</p>
									</div>
								))}
							</div> */}
					</div>
				))}
			</motion.div>
		</section>
	);
};

// {['JavaScript', 'React JS', 'All'].map((item, index) => (
// 	<div key={index} onClick={() => handleWorkFilter(item)} className={`rounded bg-button text-button-text flex place-items-center py-2 px-4 ${activeFilter === item ? ' bg-tertiary text-headline' : ''}`}>
// 		{item}
// 	</div>
// ))}

export default Work;
