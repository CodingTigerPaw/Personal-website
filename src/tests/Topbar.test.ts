import { describe, it, expect, vi } from 'vitest';
import { writable } from 'svelte/store';
import { render, screen } from '@testing-library/svelte';
import TopBar from 'components/TopBar.svelte';
import '@testing-library/jest-dom';

vi.mock('$app/stores', () => {
	const mockPage = writable({
		url: new URL('http://localhost/test-page'),
		params: {},
		route: {
			id: null
		},
		status: 200,
		error: null
	});

	return {
		page: mockPage
	};
});
describe('Topbar tests', () => {
	it('should render component', () => {
		const { getByTestId } = render(TopBar);
		expect(getByTestId('topbar')).toBeInTheDocument();
	});

	it('should have Links inside', () => {
		const links = ['/about', '/tech', '/curiculum', '/projects'];
		render(TopBar);
		const listTopBar = screen.getByTestId('list');
		const elements = listTopBar.querySelectorAll('li');

		elements.forEach((el, i) => {
			const anhor = el.querySelector('a');
			expect(anhor?.getAttribute('href')).toBe(links[i]);
		});
	});

	it('should show hamburger on mobile', async () => {
		const setMobile = (width: number) => {
			window.innerWidth = width;
			window.dispatchEvent(new Event('resize'));
		};

		render(TopBar);
		setMobile(500);
		await new Promise((r) => setTimeout(r, 1000));
		const button = screen.getByRole('button');
		const img = button.querySelector('img');
		expect(img?.getAttribute('src')).toBe('/src/lib/icons/hamburgerIcon.png');
		// await fireEvent.mouseOver(img);
		expect(img?.className).toContain('hover:invert');
	});

	it('should change icon', async () => {
		const setMobile = (width: number) => {
			window.innerWidth = width;
			window.dispatchEvent(new Event('resize'));
		};

		render(TopBar);
		setMobile(500);
		await new Promise((r) => setTimeout(r, 1000));
		const button = screen.getByRole('button');
		const img = button.querySelector('img');
		// expect(img?.getAttribute('src')).toBe('/src/lib/icons/hamburgerIcon.png');
		// await fireEvent.mouseOver(img);
		expect(img?.className).toContain('hover:invert');
	});
});
