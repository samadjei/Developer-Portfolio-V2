import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import Image from 'next/image';

const About = () => {
	const [about, setAbout] = useState([]);

	useEffect(() => {
		const query = '*[_type == "about"]';

		client.fetch(query).then((data) => {
			setAbout(data);
		});
	}, []);

	return (
		<section id="about" className="pb-10 ">
			<div>
				{about.map((about, index) => (
					<div key={about.title + index}>
						{/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
						{/* <Image src={urlFor(about.imgUrl)} alt={about.title} width={250} height={250} /> */}
						<h2 className="text-4xl pb-8 text-center ">{about.title}</h2>
						<p className="text-base md:text-xl w-5/6 text-center m-auto">{about.content}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default About;
