import apiService from './apiService';

const UniversityService = {

	save: async (university) => apiService.post('/salvar', university),

	update: async (university) => apiService.put('/editar', university),

	remove: async (id) => apiService.delete('/remover/' + id),

	findById: async (idUniversity) => apiService.get('/findById/' + idUniversity),

	list: async (filterParams) => {
			return apiService.get('/listar',
				`?page=${filterParams.currentPage > 0 ? filterParams.currentPage : 0}
				&size=${filterParams.itemsPerPage > 0 ? filterParams.itemsPerPage : 10}
				&sort=${filterParams.sortType ? filterParams.sortType : 'name,asc'}
				&filterParams=${filterParams.searchString}`
			);
		},

	};

export default UniversityService