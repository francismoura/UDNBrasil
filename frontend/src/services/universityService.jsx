import apiService from './apiService';

const UniversityService = {

	save: async (university) => apiService.post('/salvar', university),

	update: async (university) => apiService.post('/editar', university),

	remove: async (university) => apiService.post('/remover', university),

	start: async () => apiService.get('/iniciar'),

	findById: async (idUniversity) => apiService.get('/findById/' + idUniversity ),

	list: async (filterParams) => {
		if (filterParams) {
      return apiService.post(`/listar/?
						page=${filterParams.currentPage > 0 ? filterParams.currentPage : 0}
						&size=${filterParams.itemsPerPage > 0 ? filterParams.itemsPerPage : 10}
						&sort=${filterParams.sortType ? filterParams.sortType : 'name,asc'}`,
						filterParams
      );
		} else {
			return apiService.post('/listar/?page=0&size=10&sort=name,asc', {});
		}
	},

};

export default UniversityService
