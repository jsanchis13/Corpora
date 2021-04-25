const axios =  require('axios');


export class Pedido {

    /**
     * get all pedidos request
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getPedidos() {
        return axios.get('/getPedidos',{
            responseType: 'json',
        });
    }

    /**
     * New pedido request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static newPedido(params) {
        return axios.get('/newPedido',{
            responseType: 'json',
            params: params
        });
    }

    /**
     * Update existing pedido request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static updatePedido(params) {
        return axios.get('/updatePedido',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Pedido();