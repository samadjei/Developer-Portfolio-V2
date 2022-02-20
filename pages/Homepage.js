import About from '../components/Homepage/ABout';
import Hero from '../components/Homepage/Hero';
import Projects from '../components/Homepage/Projects';
import Work from '../components/Homepage/Work';

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Work />
			<About />
			<Projects />
		</div>
	);
};

export default Homepage;
