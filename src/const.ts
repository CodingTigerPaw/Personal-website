import iconsConst from './iconsConst';
export enum size {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl'
}

export type translation = {
	eng: string;
	pl: string;
};
type LandingPage = {
	header: string;
	description: translation;
	buttonText: translation;
	beanReliability: translation;
	beanPassion: translation;
};

// type CVPage = {};

type TechPage = {
	icon: string;
	text: translation;
	header: translation;
};

export const Menu = {
	about: {
		eng: 'About',
		pl: 'O mnie'
	},
	technologies: {
		eng: 'Technologies',
		pl: 'Technologie'
	},
	cv: {
		eng: 'CV',
		pl: 'CV'
	},
	projects: {
		eng: 'Projects',
		pl: 'Projekty'
	},
	contact: {
		eng: 'Contact',
		pl: 'Kontakt'
	}
};

export const LandingPage: LandingPage = {
	header: 'Frontend Developer',
	description: {
		eng: 'As a passionate programmer, I combine creativity with technology to create modern and engaging applications. My approach to coding is not just about writing code, but about crafting solutions that inspire and work flawlessly',
		pl: 'Jako programista z pasją, łączę kreatywność z technologią, aby tworzyć nowoczesne i angażujące aplikacje. Moje podejście do kodowania to nie tylko pisanie kodu, ale tworzenie rozwiązań, które inspirują i działają bez zarzutu'
	},
	buttonText: {
		eng: 'Read More',
		pl: 'Dowiedz się więcej'
	},
	beanReliability: {
		eng: 'Reliability',
		pl: 'Niezawodność'
	},
	beanPassion: {
		eng: 'Passion',
		pl: 'Pasja'
	}
};

// export const CVPage: CVPage = {};

export const Tech: TechPage[] = [
	{
		icon: iconsConst.react,
		text: {
			pl: 'ReactJS to technologia, która wznosi aplikacje webowe na nowy poziom dzięki swojej szybkości, elastyczności i skalowalności. Pozwala tworzyć błyskawicznie działające, dynamiczne interfejsy, które angażują użytkowników i zapewniają im świetne doświadczenia – co przekłada się na większą konwersję i zadowolenie klientów. Rozwijany przez Facebooka, wspierany przez ogromną społeczność, React jest zawsze na bieżąco z nowoczesnymi rozwiązaniami, dzięki czemu aplikacja może rosnąć razem z biznesem i łatwo dostosowywać się do zmieniających potrzeb. Wybierając React, inwestujesz w przyszłościową technologię, która sprawdzi się zarówno dziś, jak i za kilka lat.',

			eng: 'ReactJS is a technology that elevates web applications to a new level with its speed, flexibility, and scalability. It enables the creation of lightning-fast, dynamic interfaces that engage users and provide an exceptional experience—directly boosting customer satisfaction and conversion rates. Developed by Facebook and backed by a vast community, React stays current with the latest solutions, allowing applications to grow alongside your business and easily adapt to changing needs. By choosing React, you’re investing in a future-proof technology that will be as effective today as it will be years from now.'
		},
		header: {
			pl: 'React',
			eng: 'React'
		}
	},
	{
		icon: iconsConst.tailwind,
		text: {
			pl: 'TailwindCSS to potężny framework CSS oparty na klasach użytkowych, który sprawia, że projektowanie pięknych i responsywnych interfejsów jest szybsze i łatwiejsze niż kiedykolwiek. Dzięki bogatej bibliotece gotowych klas narzędziowych można stylować elementy bezpośrednio w HTML, eliminując potrzebę pisania niestandardowego CSS i znacząco przyspieszając rozwój. Tailwind jest wysoce konfigurowalny, więc można go idealnie dostosować do wymagań projektowych i charakteru marki, co zapewnia spójny, unikalny wygląd bez utraty elastyczności. TailwindCSS pozwala zespołowi skupić się na budowaniu nowoczesnych, dopracowanych interfejsów w szybkim tempie, co czyni go doskonałym wyborem dla każdego projektu webowego, który stawia na wydajność i styl.',

			eng: 'TailwindCSS is a powerful utility-first CSS framework that makes designing beautiful, responsive interfaces faster and easier than ever. By providing a rich library of pre-built utility classes, Tailwind lets you style elements directly in your HTML, eliminating the need for custom CSS and dramatically speeding up development. Tailwind is highly customizable, so you can adapt it perfectly to your project’s brand and design requirements, ensuring unique, cohesive visuals without sacrificing flexibility. With TailwindCSS, your team can focus on building polished, modern interfaces quickly, making it a fantastic choice for any web project aiming for both efficiency and style.'
		},
		header: {
			pl: '',
			eng: ''
		}
	}
];

export const Contact = {
	github: {
		icon: iconsConst.github,
		link: 'https://github.com/CodingTigerPaw'
	},
	email: {
		icon: iconsConst.mail,
		mail: 'marcinkowalski951@gmail.com'
	},
	phone: {
		icon: iconsConst.phone,
		number: '510 180 284'
	}
};

export default Tech;
