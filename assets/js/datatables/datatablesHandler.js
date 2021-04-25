import {DataTable} from "simple-datatables";


export class datatablesHandler {

    static productsTable = new DataTable("#productsTable",{searchable: false,perPageSelect: false});
    static clientsTable = new DataTable("#clientsTable",{searchable: false,perPageSelect: false});
    static pedidosTable = new DataTable("#pedidosTable",{searchable: false,perPageSelect: false});

    /**
     * Update datatable from Productos APi data
     * @param newRows
     */
    static updateProductosTable(newRows) {
        datatablesHandler.productsTable.destroy();
        datatablesHandler.productsTable.init();
        let arrayTable = [];
        for (let i=0; i<newRows.length; i++) {
            arrayTable.push([newRows[i].id.toString(),newRows[i].nombre,newRows[i].precio])
        }
        datatablesHandler.productsTable.rows().add(arrayTable);
    }

    /**
     * Update datatable from Clientes APi data
     * @param newRows
     */
    static updateClientesTable(newRows) {
        datatablesHandler.clientsTable.destroy();
        datatablesHandler.clientsTable.init();
        let arrayTable = [];
        for (let i=0; i<newRows.length; i++) {
            arrayTable.push([newRows[i].id.toString(),newRows[i].nombre])
        }
        datatablesHandler.clientsTable.rows().add(arrayTable);
    }

    /**
     * Update datatable from Pedidos APi data
     * @param newRows
     */
    static updatePedidosTable(newRows) {
        datatablesHandler.pedidosTable.destroy();
        datatablesHandler.pedidosTable.init();

        let arrayTable = [];
        for (let i=0; i<newRows.length; i++) {
            let pedidoDate = newRows[i].fecha.date;
            arrayTable.push([newRows[i].id.toString(),pedidoDate.split(" ")[0],newRows[i].id_cliente.toString(),newRows[i].precio])
        }
        datatablesHandler.pedidosTable.rows().add(arrayTable);
    }

}

export default new datatablesHandler();