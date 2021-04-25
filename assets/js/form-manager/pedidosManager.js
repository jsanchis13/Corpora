import { Pedido } from '../requests/pedido'
import { datatablesHandler } from '../datatables/datatablesHandler'


export class pedidosManager {

    /**
     * New Pedido creation
     */
    static newPedidoBridge() {
        let selector = document.getElementById("newPedidoClientSelect");
        let optionSel= selector.options[selector.selectedIndex];
        let idCliente = optionSel.getAttribute("cliId");

        let precio = document.getElementById("newPedidoPriceInput");

        Pedido.newPedido({idCliente: idCliente, precio: precio.value}).then(response  => {
            alert('Pedido creado correctamente!');
            precio.value = "";
            pedidosManager.getPedidosBridge();
        }).catch(error  => {
            alert("Error al crear nuevo Pedido, Intenta de nuevo.");
        });
    }

    /**
     * Get all Pedidos
     */
    static getPedidosBridge() {
        Pedido.getPedidos().then(response  => {
            datatablesHandler.updatePedidosTable(response.data);
            pedidosManager.updatePedidoSelector(response.data);
        }).catch(error  => {

        });
    }

    /**
     * Update existing Pedido
     */
    static updatePedidoBridge() {
        let selector = document.getElementById("editPedidoSelect");
        let optionSel= selector.options[selector.selectedIndex];

        let idPed = optionSel.getAttribute("pedId");
        let precio = document.getElementById("editPedidoPriceInput");

        Pedido.updatePedido({id:idPed, precio: precio.value}).then(response  => {
            precio.value = "";
            pedidosManager.getPedidosBridge();
        }).catch(error  => {
            alert("Error al editar Pedido, Intenta de nuevo.");
        });
    }

    /**
     * Update edit select section that contains list of pedidos
     * @param data
     */
    static updatePedidoSelector(data) {
        let select = document.getElementById("editPedidoSelect");
        select.innerHTML = "";

        for (let i=0; i<data.length; i++) {
            var option = document.createElement("option");
            option.text = data[i].id;
            option.setAttribute("pedId",data[i].id)
            select.add(option);
        }
    }

}

export default new pedidosManager();