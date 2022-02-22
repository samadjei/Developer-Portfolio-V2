import { motion } from 'framer-motion';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiSass } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';

const Frameworks = () => {
	return (
		<>
			<div className="flex flex-col items-center text-center gap-3">
				<SiHtml5 className="text-6xl" />
				<p>HTML</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiCss3 className="text-6xl" />
				<p>CSS</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiJavascript className="text-6xl" />
				<p>CSS</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiSass className="text-6xl" />
				<p>SASS</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiReact className="text-6xl" />
				<p>React</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiGatsby className="text-6xl" />
				<p>Gatsby</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiNextdotjs className="text-6xl" />
				<p>Next.js</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiFigma className="text-6xl" />
				<p>Figma</p>
			</div>
			<div className="flex flex-col items-center text-center gap-3">
				<SiStrapi className="text-6xl" />
				<p>Strapi</p>
			</div>
		</>
	);
};

export default Frameworks;
