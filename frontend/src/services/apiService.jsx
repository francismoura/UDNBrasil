import axios from 'axios'
import { loading } from '../utils/loading.jsx'
import { NotificationManager } from 'react-notifications';

const httpClient = axios.create({
	baseURL: "http://localhost:8080/api/universidades",
});

let countRequest = 0;

const ApiService = {

	async init() {

		await this.setHeader();

		axios.interceptors.request.use((request) => {

			if (countRequest <= 0) {
				loading.show();
				countRequest = 0;
			}

			countRequest++;
			return request;

		}, (error) => {

			countRequest--;
			this.verificarLoading();
			return Promise.reject(error);

		});

		axios.interceptors.response.use((response) => {

			countRequest--;
			this.verificarLoading();
			return response;

		}, (error) => {

			countRequest--;
			this.verificarLoading();
			return Promise.reject(error);

		});

	},

	async setHeader() {
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	},

	async get(resource, slug = '') {

		try {
			return await httpClient.get(`${resource}/${slug}`);
		} catch (error) {

			const result = {
				message: this.genericErrorHandling(error)
			};

			if (result) {
				return Promise.reject(result);
			}

		}

	},

	async post(resource, params) {

		try {
			return await axios.post(`${resource}`, params);
		} catch (error) {

			const result = {
				message: this.genericErrorHandling(error)
			};

			return Promise.reject(result);

		}

	},

	genericErrorHandling(error) {
		let {
			message
		} = error;

		if (error && error.response && error.response.status) {
			switch (error.response.status) {
				case 401:
					this.handling401(error.response.data);
					message = '';
					break;
				case 404:
					message = error.response.data.message;
					break;
				case 500:
					message = error.response.data.message;
					break;
				default:
					message = error.response.data.message;
					break;
			}
		}

		console.log('genericErrorHandling', error.response);

		return message;
	},

	handlingWarning(error) {

		let message = '';

		if (error.response && error.response.data && error.response.data.message) {
			try {
				const msg = JSON.parse(error.response.data.message);
				message = msg.message;
			} catch (e) {
				message = error.response.data.message;
			}

			NotificationManager.warning(message, 5000);
		} else if (error.response && error.response.data && error.response.data.errors) {
			error.response.data.errors.forEach(e => {
				message = message + ',' + e;
				NotificationManager.warning(e, 5000);
			});
		}

		return message;
	},

	verificarLoading () {

		if (countRequest <= 0) {
			loading.hide();
		}

	}


}

export default ApiService;