import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className={isOpen ? 'bg-section-bg text-headline fixed w-full z-10' : 'shadow bg-background fixed z-10 w-full'}>
			<div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 py-7 w-full relative">
				<div>
					<Link href="/">
						<a className="text-xl">Sam Adjei</a>
					</Link>
				</div>
				<ul className="gap-8 hidden md:flex items-center text-lg">
					{['home', 'about', 'contact', 'work', 'skills'].map((item) => (
						<li key={`link-${{ item }}`}>
							<a className="capitalize" href={`#${{ item }}`}>
								{item}
							</a>
						</li>
					))}
				</ul>
				<div className="relative md:hidden block">
					<ul className={isOpen ? 'fixed flex left-0 right-0 px-8 top-20 gap-8 flex-col w-full bg-section-bg text-headline z-30 pb-8 shadow' : 'hidden'}>
						{['home', 'about', 'contact', 'work', 'skills'].map((item) => (
							<li key={`link-${{ item }}`}>
								<a className="capitalize" href={`#${{ item }}`}>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
				{isOpen ? <FiX className="md:hidden cursor-pointer text-3xl" onClick={menuToggle} /> : <FiMenu className="md:hidden cursor-pointer text-3xl" onClick={menuToggle} />}
			</div>
		</nav>
	);
};

export default Navbar;
