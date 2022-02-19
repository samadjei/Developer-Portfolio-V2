import React from 'react';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
	return (
		<div className="bg-background pt-8 ">
			<div className="container flex flex-col md:flex-row justify-center items-center gap-8 md:justify-between mx-auto px-8 md:px-14 lg:px-24 py-7 w-full">
				<p className=" text-sm md:text-base  ">&copy; {new Date().getFullYear()} Samuel Adjei - FrontEnd Developer </p>
				<p className="flex md:flex-row gap-1 flex-col">
					<span className="text-sm md:text-base ">Built with:</span>
					<div className="flex gap-4 ">
						<SiNextdotjs className="text-2xl" /> + <SiTailwindcss className="text-2xl " />
					</div>
				</p>
			</div>
		</div>
	);
};

export default Footer;
