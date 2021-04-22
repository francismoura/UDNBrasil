import ApiService from './apiService';

const UniversityService = {

    listar: async (documentosFiltro) => {
        if (documentosFiltro) {
            return ApiService.post(`/listar/?
						page=${documentosFiltro.pagina > 0 ? documentosFiltro.pagina : 0}
						&size=${documentosFiltro.itemsPorPagina > 0 ? documentosFiltro.itemsPorPagina : 10}
						&sort=${documentosFiltro.tipoOrdenacao ? documentosFiltro.tipoOrdenacao : 'nome,asc'}`,
                documentosFiltro
            );
        } else {
            return ApiService.get('/listar');
        }
    },

};

export default UniversityService