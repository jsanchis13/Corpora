const axios =  require('axios');


export class Cliente {

    static getClientes(){
        return axios.get('/getClientes',{
            responseType: 'json',
        });
    }

    static newCliente(params){
        return axios.get('/newCliente',{
            responseType: 'json',
            params: params
        });
    }

    static updateCliente(params){
        return axios.get('/updateCliente',{
            responseType: 'json',
            params: params
        });
    }

}

export default new Cliente();