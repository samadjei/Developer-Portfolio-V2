import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { FiEye } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
	return (
		<div className="relative h-90">
			<div className="z-10 flex flex-col items-center justify-center md:pt-32 pt-32">
				<h1 className="text-xl md:text-2xl">Hi there, my name is</h1>
				<h2 className="sm:text-9xl text-7xl pt-4 pb-4 text-center">Sam Adjei</h2>
				<p className="text-xl md:w-9/12 text-center">I self-taught web developer from Slough, UK, specialising in building JavaScript-based websites and applications.</p>
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
						<a href="#projects">View my work</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
