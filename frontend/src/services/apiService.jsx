import axios from 'axios'
import { loading } from '../utils/loading.jsx'
// import { NotificationManager } from 'react-notifications';

const httpClient = axios.create({
	baseURL: "http://localhost:8080/app/universidades"
});

let countRequest = 0;

const ApiService = {

	async init() {

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

	async get(resource, slug = '') {

		try {
			return await httpClient.get(`${resource}/${slug}`);
		} catch (error) {
			return Promise.reject(error);
		}

	},

	async post(resource, params) {

		try {
			return await httpClient.post(`${resource}`, params);
		} catch (error) {
			return Promise.reject(error);
		}

	},

	async update (resource, slug, params) {
		try {
			return await httpClient.put(`${resource}/${slug}`, params);
		} catch (error) {
			return Promise.reject(error);
		}
	},

	async delete (resource) {
		try {
			return await httpClient.delete(resource);
		} catch (error) {
			return Promise.reject(error);
		}
	},


// 	genericErrorHandling(error) {
// 		let {
// 			message
// 		} = error;

// 		if (error && error.response && error.response.status) {
// 			switch (error.response.status) {
// 				case 401:
// 					// this.handling401(error.response.data);
// 					message = '';
// 					break;
// 				case 404:
// 					message = error.response.data.message;
// 					break;
// 				case 500:
// 					message = error.response.data.message;
// 					break;
// 				default:
// 					message = error.response.data.message;
// 					break;
// 			}
// 		}

// 		console.log('genericErrorHandling', error.response);

// 		return message;
// 	},

// 	verificarLoading () {

// 		if (countRequest <= 0) {
// 			loading.hide();
// 		}

// 	}


}

export default ApiService;
