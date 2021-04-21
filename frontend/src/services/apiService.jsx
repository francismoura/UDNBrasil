import axios from 'axios'
import { loading } from '../utils/loading.jsx'

let countRequest = 0;

const ApiService = {

    async init() {

        axios.create({
            baseURL: "http://localhost:8080",
        });

        await this.setHeader();

        axios.interceptors.request.use((config) => {

            if (countRequest <= 0) {
                loading.show();
                countRequest = 0;
            }

            countRequest++;
            return config;

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
            return await axios.get(`${resource}/${slug}`);
        } catch (error) {

            const result = {
                // message: this.genericErrorHandling(error)
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
                // message: this.genericErrorHandling(error)
            };

            return Promise.reject(result);

        }

    },

}

export default ApiService;