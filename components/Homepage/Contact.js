import { FiMail } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Headers from '../../constants/Headers';

const Contact = () => {
	return (
		<section id="contact" className="pb-28">
			<Headers title="Contact" />
			<div className="flex justify-center gap-12 ">
				<div>
					<a href="mailto:samueladj3i@gmail.com">
						<FiMail className="text-6xl" />
					</a>
				</div>
				<div>
					<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/samkadjei">
						<FiTwitter className="text-6xl" />
					</a>
				</div>
				<div>
					<a target="_blank" rel="noopener noreferrer" href="">
						<FiLinkedin className="text-6xl" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
