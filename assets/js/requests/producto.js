const axios =  require('axios');


export class Producto {

    /**
     * get all productos request
     * @returns {Promise<AxiosResponse<any>>}
     */
     static getProductos(){
        return axios.get('/getProductos',{
            responseType: 'json',
        });
    }

    /**
     * New producto request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static newProducto(params) {
        return axios.get('/newProducto',{
            responseType: 'json',
            params: params
        });
    }

    /**
     * Update existing producto request
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    static updateProducto(params) {
        return axios.get('/updateProducto',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Producto();