import png from '../images/loading.gif'

const image = document.createElement('img');
image.setAttribute('src', png);
image.setAttribute('height', '80');
image.setAttribute('width', '80');
image.style.cssText = 'z-index: 9999';

const container = document.createElement('div');
container.appendChild(image);
container.style.position = 'fixed';
container.style.top = 0;
container.style.height = '100vh';
container.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.width = '100vw';
container.style.zIndex = 9999;
container.style.display = 'none';
container.id = 'mra_loading';

const body = document.querySelector('body');
body.appendChild(container);

export const loading = {
	show: () => {
		container.style.display = 'flex';
	},
	hide: () => {
		container.style.display = 'none';
	}
};
