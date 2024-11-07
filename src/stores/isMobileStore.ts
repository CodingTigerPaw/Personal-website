import { readable } from 'svelte/store';
import { browser } from '$app/environment';
// import Device from 'svelte-device-info';

export const isMobile = readable(false, (set) => {
	// const myDevice = Device;
	// if (myDevice.isMobile) {
	// 	set(true);
	// } else {
	// 	set(false);
	// }
	if (browser) {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 768) {
				set(true);
			} else {
				set(false);
			}
		});
	}
});
