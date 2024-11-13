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
	customClass?: string;
	customIconClass?: string;
};

type AboutDetails = {
	header: translation;
	descrition: translation;
};

type AboutPage = {
	header: translation;
	description: translation;
	details: AboutDetails[];
};
export const Menu = {
	homepage: {
		eng: 'homepage',
		pl: 'homepage'
	},
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
			pl: 'TailwindCSS',
			eng: 'TailwindCSS'
		}
	},
	{
		icon: iconsConst.angular,
		text: {
			pl: 'Angular to kompletny, nowoczesny framework, który pozwala tworzyć wyjątkowo rozbudowane i interaktywne aplikacje webowe o imponującej wydajności. Dzięki wbudowanym funkcjom, jak dwukierunkowa komunikacja danych i modularna struktura, Angular umożliwia efektywne zarządzanie dużymi projektami i łatwe skalowanie aplikacji. To framework, który nie tylko przyspiesza rozwój aplikacji, ale też zapewnia pełną spójność kodu i elastyczność, co przekłada się na mniejsze koszty utrzymania w dłuższej perspektywie. Angular jest wspierany przez Google i stale rozwijany, więc to inwestycja w przyszłość oparta na technologii, która nie zwalnia tempa. Jeśli szukasz potężnego narzędzia do budowy aplikacji, które przyciągną użytkowników i zapewnią im najlepsze doświadczenia, Angular jest idealnym wyborem!',
			eng: 'Angular is a complete, modern framework that enables the creation of highly complex and interactive web applications with impressive performance. With built-in features like two-way data binding and a modular structure, Angular allows for efficient management of large projects and seamless scalability. It’s a framework that not only speeds up application development but also ensures code consistency and flexibility, leading to lower maintenance costs in the long run. Supported and continuously developed by Google, Angular is a future-proof investment backed by a technology that keeps evolving. If you’re looking for a powerful tool to build applications that attract users and deliver top-notch experiences, Angular is the perfect choice!'
		},
		header: {
			pl: 'Angular',
			eng: 'Angular'
		},
		customIconClass: ' -translate-y-1'
	},
	{
		icon: iconsConst.typescript,
		text: {
			pl: 'TypeScript to nowoczesne rozszerzenie JavaScriptu, które wnosi nowy poziom kontroli i bezpieczeństwa do tworzenia aplikacji webowych. Dzięki typowaniu statycznemu i autouzupełnianiu kodu, TypeScript pomaga unikać błędów już na etapie pisania kodu, co znacząco obniża koszty debugowania i przyspiesza rozwój projektu. Jest w pełni kompatybilny z JavaScriptem, co oznacza, że można go łatwo wprowadzić do istniejących projektów, dodając przy tym solidność i stabilność. TypeScript nie tylko sprawia, że kod jest bardziej przewidywalny i zrozumiały, ale także sprawia, że zespoły programistyczne mogą pracować szybciej i bardziej efektywnie. Wybierając TypeScript, wybierasz solidne podstawy, które ułatwiają skalowanie i utrzymanie aplikacji na najwyższym poziomie.',
			eng: 'TypeScript is a modern extension of JavaScript that brings a new level of control and security to web application development. With static typing and code autocompletion, TypeScript helps catch errors at the coding stage, significantly reducing debugging costs and speeding up project development. It’s fully compatible with JavaScript, which means it can be seamlessly integrated into existing projects, adding robustness and stability. TypeScript not only makes code more predictable and understandable but also enables development teams to work faster and more efficiently. By choosing TypeScript, you’re opting for a solid foundation that makes scaling and maintaining applications much easier.'
		},
		header: {
			pl: 'TypeScript',
			eng: 'TypeScript'
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

export const About: AboutPage = {
	header: {
		eng: 'About me',
		pl: 'O mnie'
	},
	description: {
		eng: '',
		pl: ''
	},

	details: [
		{
			header: {
				eng: 'Perfection in the Details',
				pl: 'Perfekcjonizm w Detalach'
			},
			descrition: {
				eng: 'I have a real obsession with the details! Every pixel on the page, every transition, and even the smallest animation has to be perfect. I don’t take shortcuts – each element I create must be in flawless harmony with the rest. I place huge importance on the finishing touches, so the user not only sees the visual “wow” but feels a complete sense of harmony and cohesion throughout the design. Even the smallest detail can make a difference – and it’s on these tiny touches that I build exceptional user experiences.',
				pl: 'Mam prawdziwego „bzika” na punkcie szczegółów! Każdy piksel na stronie, każde przejście i najmniejsza animacja musi być dopięta na ostatni guzik. Nie idę na skróty – każdy element, który tworzę, musi być idealnie zsynchronizowany z resztą. Przykładam ogromną wagę do wykończenia, tak aby użytkownik nie tylko zauważył wizualne „wow”, ale odczuł pełną harmonię i spójność projektu. Nawet najmniejszy szczegół może mieć znaczenie – i właśnie na tych drobnych detalach buduję wyjątkowe doświadczenia dla użytkownika.'
			}
		},
		{
			header: {
				eng: 'Knowledge of New Technologies and a Desire for Growth',
				pl: 'Znajomość Nowych Technologii i Chęć Rozwoju'
			},
			descrition: {
				eng: 'I stay on top of the latest frontend trends and technologies – from cutting-edge frameworks to tools that can enhance productivity and bring fresh energy to a project! Keeping up with new developments and testing innovative solutions is part of my daily routine because I believe the best projects are born at the intersection of creativity and technology. This way, I can not only adapt quickly to changing demands but also introduce innovations that make the project truly stand out.',
				pl: 'Jestem na bieżąco z najnowszymi trendami i technologiami frontendowymi – od najświeższych frameworków po narzędzia, które potrafią usprawnić pracę i dodać projektowi mocy! Śledzenie nowinek i testowanie nowych rozwiązań to dla mnie codzienność, bo wierzę, że najlepsze projekty rodzą się na styku kreatywności i technologii. Dzięki temu mogę nie tylko szybko adaptować się do zmieniających się wymagań, ale i wprowadzać innowacje, które sprawiają, że projekt wyróżnia się na tle innych'
			}
		},
		{
			header: {
				eng: 'Analytical Approach and Problem Solving',
				pl: 'Podejście Analityczne i Rozwiązywanie Problemów'
			},
			descrition: {
				eng: ' I love challenges, and every complex feature or bug feels like a puzzle waiting to be solved! When a problem arises, I analyze it from different angles, aiming for the best, long-term solution – not just a quick fix. With an analytical mindset, I can quickly spot what needs improvement and create solutions that are stable, efficient, and built to last.',
				pl: 'Uwielbiam wyzwania, a każda złożona funkcjonalność czy usterka to dla mnie zagadka do rozwiązania! Kiedy pojawia się problem, analizuję go z różnych perspektyw, szukając najlepszego, długoterminowego rozwiązania – nie tylko takiego, które „załata” sytuację na chwilę. Dzięki podejściu analitycznemu jestem w stanie szybko wychwycić, co wymaga poprawy, i stworzyć rozwiązania, które są stabilne, efektywne i przyszłościowe.'
			}
		},
		{
			header: {
				eng: 'Teamwork Skills',
				pl: 'Umiejętność Pracy Zespołowej'
			},
			descrition: {
				eng: ' the best projects are born when every team member brings their unique perspective to the table. I work well with designers, backend developers, and UX experts, valuing open communication and idea-sharing. I also welcome feedback that helps the project and myself grow. Teamwork is, for me, an opportunity to create something greater than the sum of its parts!',
				pl: 'najlepsze projekty powstają, kiedy każdy członek zespołu wnosi swoją unikalną perspektywę. Świetnie czuję się we współpracy z designerami, programistami backendowymi i UX-owcami. Cenię otwartą komunikację i dzielenie się pomysłami, a także chętnie przyjmuję feedback, który pomaga mi rozwijać projekt i siebie. Praca zespołowa to dla mnie szansa na stworzenie czegoś, co jest większe niż suma części!'
			}
		},
		{
			header: {
				eng: 'Coding Style Adapted to Project Requirements',
				pl: 'Dopasowanie Stylu Kodowania do Wymogów Projektu'
			},
			descrition: {
				eng: 'I code with the future in mind – my projects are crafted to be readable, well-documented, and easy to scale. I respect others’ time and understand how important it is for any developer coming after me to grasp the code logic and build upon it effortlessly. I make sure my coding style aligns with both the project’s requirements and the team’s needs.',
				pl: 'Koduję z myślą o przyszłości – staram się, by moje projekty były zrozumiałe, dobrze udokumentowane i łatwe do rozbudowy. Szanuję czas innych i wiem, jak ważne jest, by każdy kolejny programista mógł łatwo zrozumieć logikę kodu i rozwijać go bez trudności. Staram się, by styl mojego kodu odpowiadał zarówno wymaganiom projektu, jak i potrzebom zespołu'
			}
		},
		{
			header: {
				eng: 'Creativity and Outside-the-Box Solutions',
				pl: 'Twórczość i Nieszablonowe Rozwiązania'
			},
			descrition: {
				eng: 'I’m not afraid to think outside the box! When standard approaches aren’t enough, I look for creative solutions that make the project stand out and give users a “wow” experience. I love building features that not only work well but also impress, making websites not only functional but also memorable and inspiring.',
				pl: 'Nie boję się myśleć poza schematami! Kiedy standardowe podejścia nie wystarczają, szukam kreatywnych rozwiązań, które pozwolą projektowi się wyróżnić i dodać użytkownikom „efekt wow”. Uwielbiam tworzyć funkcjonalności, które nie tylko działają, ale robią wrażenie, dzięki czemu strony są nie tylko użyteczne, ale także inspirujące i zapadające w pamięć.'
			}
		}
	]
};

export default Tech;
