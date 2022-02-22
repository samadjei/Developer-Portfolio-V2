import About from '../components/Homepage/ABout';
import Contact from '../components/Homepage/Contact';
import Hero from '../components/Homepage/Hero';
import Skills from '../components/Homepage/Skills';
import Work from '../components/Homepage/Work';

const Homepage = () => {
	return (
		<div>
			<Hero />
			<Work />
			<About />
			<Skills />
			<Contact />
		</div>
	);
};

export default Homepage;
