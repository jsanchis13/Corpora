import { productosManager } from '../form-manager/productosManager'
import { clientesManager } from '../form-manager/clientesManager'
import { pedidosManager } from '../form-manager/pedidosManager'


window.onload = function() {

    productosManager.getProductosBridge();
    clientesManager.getClientesBridge();
    pedidosManager.getPedidosBridge();
    /**
     * Adding app listeners
     **/
    document.getElementById("btnNewProduct").addEventListener("click", productosManager.newProductoBridge, false);
    document.getElementById("btnEditProduct").addEventListener("click", productosManager.updateProductoBridge, false);

    document.getElementById("btnNewClient").addEventListener("click", clientesManager.newClienteBridge, false);
    document.getElementById("btnEditClient").addEventListener("click", clientesManager.updateClienteBridge, false);

    document.getElementById("btnNewPedido").addEventListener("click", pedidosManager.newPedidoBridge, false);
    document.getElementById("btnEditPedido").addEventListener("click", pedidosManager.updatePedidoBridge, false);

};


