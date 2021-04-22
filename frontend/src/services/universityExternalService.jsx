import ApiService from './apiService';

const UniversityExternalService = {

    listar: async (documentosFiltro) => {
        if (documentosFiltro) {
            return ApiService.post(`/externa/listar/?
						page=${documentosFiltro.pagina > 0 ? documentosFiltro.pagina : 0}
						&size=${documentosFiltro.itemsPorPagina > 0 ? documentosFiltro.itemsPorPagina : 10}
						&sort=${documentosFiltro.tipoOrdenacao ? documentosFiltro.tipoOrdenacao : 'nome,asc'}`,
                documentosFiltro
            );
        } else {
            return ApiService.get('/externa/listar');
        }
    },

};

export default UniversityExternalService