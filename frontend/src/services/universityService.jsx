import ApiService from './apiService';

const UniversityService = {

    iniciar: async () => ApiService.get('/iniciar'),

    listar: async (universidadeFiltro) => {
        if (universidadeFiltro) {
            return ApiService.post(`/listar/?
						page=${universidadeFiltro.pagina > 0 ? universidadeFiltro.pagina : 0}
						&size=${universidadeFiltro.itemsPorPagina > 0 ? universidadeFiltro.itemsPorPagina : 10}
						&sort=${universidadeFiltro.tipoOrdenacao ? universidadeFiltro.tipoOrdenacao : 'nome,asc'}`,
                universidadeFiltro
            );
        } else {
            return ApiService.get('/listar');
        }
    },

};

export default UniversityService