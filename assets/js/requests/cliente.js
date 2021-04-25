const axios =  require('axios');


export class Cliente {

    /**
     * get all clientes request
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getClientes() {
        return axios.get('/getClientes',{
            responseType: 'json',
        });
    }

    /**
     * New client request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static newCliente(params) {
        return axios.get('/newCliente',{
            responseType: 'json',
            params: params
        });
    }

    /**
     * Update existing client request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static updateCliente(params) {
        return axios.get('/updateCliente',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Cliente();