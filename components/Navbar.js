import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { FiTriangle } from 'react-icons/fi';
import ContactDropdown from './ContactDropdown';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className={isOpen ? 'bg-section-bg text-headline ' : 'shadow bg-background'}>
			<nav className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 py-7 w-full relative">
				<div>
					<Link href="/">
						<a className="text-xl">Sam Adjei</a>
					</Link>
				</div>
				<ul className={isOpen ? 'absolute left-0 px-8 flex top-20 gap-8 flex-col w-full bg-section-bg text-headline z-30 pb-8 shadow' : 'hidden md:flex items-center gap-8 text-lg '}>
					{/* <li className="cursor-pointer">
						<a>About</a>
					</li> */}
					<li className="cursor-pointer">
						{/* <Link href="/Projects"> */}
						<a href="#projects">Work</a>
						{/* </Link> */}
					</li>
					<li className="cursor-pointer">
						<div className="flex items-center gap-2">
							{/* <Link href="/"> */}
							<a href="mailto:samueladj3i@gmail.com">Connect</a>
							{/* </Link> */}
							{/* <FiTriangle className="rotate-180 text-xs" /> */}
						</div>
						{/* <ContactDropdown /> */}
					</li>
				</ul>
				{isOpen ? <FiX className="md:hidden cursor-pointer text-3xl" onClick={menuToggle} /> : <FiMenu className="md:hidden cursor-pointer text-3xl" onClick={menuToggle} />}
			</nav>
		</div>
	);
};

export default Navbar;
