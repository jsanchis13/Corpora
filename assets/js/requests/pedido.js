const axios =  require('axios');


export class Pedido {

    static getPedidos(){
        return axios.get('/getPedidos',{
            responseType: 'json',
        });
    }

    static newPedido(params){
        return axios.get('/newPedido',{
            responseType: 'json',
            params: params
        });
    }

    static updatePedido(params){
        return axios.get('/updatePedido',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Pedido();