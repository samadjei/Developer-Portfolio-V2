import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { FiEye } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
	return (
		<div className="relative h-90 flex justify-center">
			<div className="flex flex-col items-center justify-center ">
				<h1 className="text-xl md:text-2xl">Hi there, my name is</h1>
				<h2 className="lg:text-9xl md:text-7xl text-6xl pt-4 pb-6 text-center">Sam Adjei</h2>
				<p className="text-lg md:text-xl md:w-9/12 text-center">I self-taught web developer from Slough, UK specialising in building JavaScript-based websites and applications.</p>
				<div className="flex gap-8 items-center pt-8 md:flex-row flex-col ">
					<Link href="/" passHref>
						<Button>
							<FiDownload className="text-xl text-button-text" />
							<a href="/assets/CV_Samuel_Adjei.pdf" download>
								Download Resume
							</a>
						</Button>
					</Link>

					<div className="flex items-center gap-4 cursor-pointer">
						<FiEye className="text-xl" />
						<a href="#work">View my work</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
