import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import Image from 'next/image';
import Headers from '../../constants/Headers';

const About = () => {
	const [about, setAbout] = useState([]);

	useEffect(() => {
		const query = '*[_type == "about"]';

		client.fetch(query).then((data) => {
			setAbout(data);
		});
	}, []);

	return (
		<section id="about" className="pb-28">
			<div>
				{about.map((about, index) => (
					<div key={about.title + index}>
						{/* <Image src={urlFor(about.imgUrl)} alt={about.title} width="250" height="250" /> */}
						<Headers className="text-5xl pb-10 text-center uppercase" title="About" />
						<img className='md:w-2/5 w-4/5 lg:w-1/4 m-auto pb-8' src={urlFor(about.imgUrl)} alt={about.title}  />
						<p className="text-base md:text-lg w-full md:w-5/6 text-center m-auto">{about.content}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
