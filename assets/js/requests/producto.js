const axios =  require('axios');


export class Producto {

     static getProductos(){
        return axios.get('/getProductos',{
            responseType: 'json',
        });
    }

    static newProducto(params){
        return axios.get('/newProducto',{
            responseType: 'json',
            params: params
        });
    }

    static updateProducto(params){
        return axios.get('/updateProducto',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Producto();