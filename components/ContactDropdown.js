import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
const ContactDropdown = () => {
	return (
		<div className="absolute pt-3 opacity-0 hover:opacity-100">
			<div className="flex items-center pb-3 gap-2">
				<FiInbox />
				<a href="mailto:samueladj3i@gmail.com"></a>
				Gmail
			</div>
			<div className="flex items-center pb-3 gap-2">
				<FiTwitter />
				<a rel="noopener" target="_blank" href="https://twitter.com/samkadjei"></a>
				Twitter
			</div>
			<div className="flex items-center pb-3 gap-2">
				<FiLinkedin />
				<a rel="noopener" target="_blank" href="https://www.linkedin.com/in/samuel-adjei/"></a>
				LinkedIn
			</div>
		</div>
	);
};

export default ContactDropdown;
