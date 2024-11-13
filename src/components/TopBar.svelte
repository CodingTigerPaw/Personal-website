<script lang="ts">
	import Link from './atoms/Link.svelte';
	import Header from './atoms/Header.svelte';
	import { size, Menu } from '../const';
	import { page } from '$app/stores';
	import Icon from './atoms/Icon.svelte';
	import HamburgerIcon from '../lib/icons/hamburgerIcon.png';
	import { twMerge } from 'tailwind-merge';
	import lang from '../stores/languageStore';
	import { translate } from '../utils/translate.svelte';
	import Popup from './Popup.svelte';
	import Contact from './Contact.svelte';
	import { pushState } from '$app/navigation';

	let hamburgerMenu = $state(true);
	let showPopup = $state(false);

	const setHamburgerMenu = () => {
		hamburgerMenu = !hamburgerMenu;
	};

	const onCheckbox = () => {
		if ($lang === 'pl') {
			lang.set('eng');
		} else {
			lang.set('pl');
		}
	};
</script>

<div data-testid="topbar" class="px-2 py-6 flex h-full bg-blue text-white top-0">
	<Link dest="/" isLogo>
		<Header textSize={size.xl} text="Marcin Kowalski" />
	</Link>
	<ul data-testid="list" class="ml-auto w-1/2 lg:w-1/3 lg:mr-4 justify-around hidden md:flex z-1">
		<li>
			<Link
				isActive={$page.url.pathname === '/about'}
				dest="/about"
				text={$translate(Menu.about)}
			/>
		</li>
		<li>
			<Link
				isActive={$page.url.pathname === '/tech'}
				dest="/tech"
				text={$translate(Menu.technologies)}
			/>
		</li>
		<!-- <li> -->
		<!-- <Link
				isActive={$page.url.pathname === '/curiculum'}
				dest="/curiculum"
				text={$translate(Menu.cv)}
			/> -->
		<!-- </li> -->
		<!-- <li>
			<Link
				isActive={$page.url.pathname === '/projects'}
				dest="/projects"
				text={$translate(Menu.projects)}
			/>
		</li> -->
		<li>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span
				class="hover:bg-orange-600 box-border hover:rounded-lg p-1"
				onclick={() => {
					showPopup = !showPopup;
					console.log(showPopup);
					pushState('', { showModal: true });
				}}>{$translate(Menu.contact)}</span
			>
		</li>
		<li>
			<label class="inline-flex items-center cursor-pointer">
				<span class={twMerge($lang === 'pl' && 'text-orange-500', 'px-2')}>PL</span>
				<input
					type="checkbox"
					value=""
					class="sr-only peer"
					onchange={onCheckbox}
					checked={$lang === 'eng'}
				/>
				<div
					class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
				></div>
				<span class={twMerge($lang === 'eng' && 'text-orange-500', 'px-2')}>ENG</span>
			</label>
		</li>
	</ul>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->

	<div
		role="button"
		tabindex="0"
		class="md:hidden ml-auto px-2 top-0 relative"
		onclick={() => {
			setHamburgerMenu();
		}}
	>
		<div class="bg-orange-400">
			<Icon src={HamburgerIcon} customClass="fixed w-[30px] right-2 hover:invert" />
		</div>

		<div
			class={twMerge(
				` w-[150px] fixed mt-4 top-12 bg-white border border-black text-black transition-all`,
				hamburgerMenu ? 'right-[-150px]' : 'right-0'
			)}
		>
			<ul class="ml-4 my-2">
				<li>
					<Link isHamburger dest="/" isActive={$page.url.pathname === '/'}>
						<div class="p-1">{$translate(Menu.homepage)}</div>
					</Link>
				</li>
				<li>
					<Link isHamburger dest="/about" isActive={$page.url.pathname === '/about'}>
						<div class="p-1">{$translate(Menu.about)}</div>
					</Link>
				</li>
				<li>
					<Link isHamburger dest="/tech" isActive={$page.url.pathname === '/tech'}>
						<div class="p-1">{$translate(Menu.technologies)}</div>
					</Link>
				</li>
				<!-- <li>
					<Link isHamburger dest="/curiculum" isActive={$page.url.pathname === '/curiculum'}>
						<div class="p-1">{$translate(Menu.cv)}</div>
					</Link>
				</li> -->
				<!-- <li>
					<Link isHamburger dest="/projects" isActive={$page.url.pathname === '/projects'}>
						<div class="p-1">{$translate(Menu.projects)}</div>
					</Link>
				</li> -->
				<li>
					<span
						class={'p-1'}
						onclick={() => {
							showPopup = !showPopup;
							console.log(showPopup);
							pushState('', { showModal: true });
						}}
						>{$translate(Menu.contact)}
					</span>
				</li>
				<li>
					<label class="inline-flex items-center cursor-pointer pt-4">
						<span class={twMerge($lang === 'pl' && 'text-orange-500', 'px-2')}>PL</span>
						<input
							type="checkbox"
							value=""
							class="sr-only peer"
							onchange={onCheckbox}
							checked={$lang === 'eng'}
						/>
						<div
							class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
						></div>
						<span class={twMerge($lang === 'eng' && 'text-orange-500', 'px-2')}>ENG</span>
					</label>
				</li>
			</ul>
		</div>
	</div>
	<Popup bind:isVisible={showPopup} Comp={Contact} />
</div>
