import { Cliente } from '../requests/cliente'
import { datatablesHandler } from '../datatables/datatablesHandler'


export class clientesManager {

    /**
     * New Client creation
     */
    static newClienteBridge() {
        let nombre = document.getElementById("newClientNameInput");

        Cliente.newCliente({nombre: nombre.value}).then(response  => {
            alert('Cliente creado correctamente!');
            nombre.value = "";
            clientesManager.getClientesBridge();
        }).catch(error  => {
            alert("Error al crear nuevo Cliente, Intenta de nuevo.");
        });
    }

    /**
     * Get all Clients
     */
    static getClientesBridge() {
        Cliente.getClientes().then(response  => {
            datatablesHandler.updateClientesTable(response.data);
            clientesManager.updateClientePedidoSelector(response.data);
        }).catch(error  => {

        });
    }

    /**
     * Update existing Client
     */
    static updateClienteBridge() {
        let selector = document.getElementById("editClienteSelect");
        let optionSel= selector.options[selector.selectedIndex];

        let idCliente = optionSel.getAttribute("cliId");
        let nombre = document.getElementById("editClientNameInput");

        Cliente.updateCliente({id:idCliente, nombre: nombre.value}).then(response  => {
            nombre.value = "";
            clientesManager.getClientesBridge();
        }).catch(error  => {
            alert("Error al editar Cliente, Intenta de nuevo.");
        });
    }

    /**
     * Update edit select section that contains list of clients
     * @param data
     */
    static updateClientePedidoSelector(data) {
        let clientSelect = document.getElementById("editClienteSelect");
        let pedidoSelect = document.getElementById("newPedidoClientSelect");
        clientSelect.innerHTML = "";
        pedidoSelect.innerHTML = "";

        for (let i=0; i<data.length; i++) {
            let optionCli = document.createElement("option");
            optionCli.text = data[i].nombre;
            optionCli.setAttribute("cliId",data[i].id)
            clientSelect.add(optionCli);

            let optionPed = document.createElement("option");
            optionPed.text = data[i].nombre;
            optionPed.setAttribute("cliId",data[i].id)
            pedidoSelect.add(optionPed);
        }
    }

}

export default new clientesManager();