// import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import Headers from '../../constants/Headers';
import { Work } from '../../constants/Work';

const Projects = () => {
	return (
		<section  id="projects">
			<Headers title="Projects" />
			<div className="grid  md:grid-cols-2 items-center gap-8 gap-y-14 min-h-full">
				{Work.map(({ id, image, title, description, tags, link, github }) => (
					<div className="card-bg" key={id}>
						<div>
							{/* <Image src={image} alt={title} width={500} height={250} /> */}
							<img src={image} alt={title} />
						</div>
						<div className="pt-4">
							<h3 className="pb-4">{title}</h3>
							<p>{description}</p>
							<div className="flex gap-4 pt-6">
								<a className="flex gap-2" target="_blank" rel="noopener noreferrer" href={link}>
									<span>Live site:</span>
									<FiExternalLink className="text-2xl" />
								</a>
								<a className="flex gap-2" target="_blank" rel="noopener noreferrer" href={github}>
									<span>Repo:</span>
									<FiGithub className="text-2xl" />
								</a>
							</div>
							{/* Tags */}
							<div className="flex gap-4 pt-4 ">
								{tags.map((tag, i) => (
									<div className="bg-button text-button-text font-bold rounded py-3 px-3" key={i}>
										{tag}
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
