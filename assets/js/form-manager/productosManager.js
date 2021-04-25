import { Producto } from '../requests/producto'
import { datatablesHandler } from '../datatables/datatablesHandler'


export class productosManager {

    /**
     * New Product creation
     */
    static newProductoBridge() {
        let nombre = document.getElementById("newProductoNameInput");
        let precio = document.getElementById("newProductoPriceInput");

        Producto.newProducto({nombre: nombre.value, precio: precio.value}).then(response  => {
            alert('Producto creado correctamente!');
            nombre.value = "";
            precio.value = "";
            productosManager.getProductosBridge();
        }).catch(error  => {
            alert("Error al crear nuevo Producto, Intenta de nuevo.");
        });
    }

    /**
     * Get all Products
     */
    static getProductosBridge() {
        Producto.getProductos().then(response  => {
            datatablesHandler.updateProductosTable(response.data);
            productosManager.updateProdocuctoSelector(response.data);
        }).catch(error  => {

        });
    }

    /**
     * Update existing product
     */
    static updateProductoBridge() {
        let selector = document.getElementById("editProductoSelect");
        let optionSel= selector.options[selector.selectedIndex];

        let idProducto = optionSel.getAttribute("prodId");
        let nombre = document.getElementById("editProductoNameInput");
        let precio = document.getElementById("editProductoPriceInput");

        Producto.updateProducto({id:idProducto, nombre: nombre.value, precio: precio.value}).then(response  => {
            nombre.value = "";
            precio.value = "";
            productosManager.getProductosBridge();
        }).catch(error  => {
            alert("Error al editar Producto, Intenta de nuevo.");
        });
    }


    /**
     * Update edit select section that contains list of products
     * @param data
     */
    static updateProdocuctoSelector(data) {
        let select = document.getElementById("editProductoSelect");
        select.innerHTML = "";

        for (let i=0; i<data.length; i++) {
            var option = document.createElement("option");
            option.text = data[i].nombre;
            option.setAttribute("prodId",data[i].id)
            select.add(option);
        }
    }

}

export default new productosManager();