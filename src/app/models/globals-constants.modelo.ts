export class GlobalsConstants {
    // Variables Etiquetas
    cEditar: string;
    cBuscar: string;
    cConsultar: string;
    cNuevo: string;
    cEliminar: string;
    cGrabar: string;
    cCancelar: string;
    cRegresar: string;
    cListar: string;
    cImprimir: string;
    cAgregar: string;
    cAceptar: string;
    cSalir: string;
    cCerrar: string;
    cAnular: string;

    cToastPosition: string;

    // Style
    cStyleButtonSecundario: string
    cStyleButtonSuccess: string
    

    // Variables Iconos
    icoEditar: string;
    icoNuevo: string;
    icoBuscar: string;
    icoConsultar: string;
    icoGrabar: string;
    icoEliminar: string;
    icoCancelar: string;
    icoRegresar: string;
    icoListar: string;
    icoImprimir: string;
    icoAceptar: string;
    icoPlus: string;
    icoMinus: string;
    icoSalir: string;
    icoMedico: string;
    icoView: string;
    icoAlert: string;
    // Variables titulos
    titleEliminar: string;
    subTitleEliminar: string;

    titleAnular: string;
    subTitleAnular: string;

    titleCierre: string;
    subTitleCierre: string;

    titleGrabar: string;
    subTitleGrabar: string;

    // Variables mensaje
    msgExitoSummary: string;
    msgExitoDetail: string;

    msgErrorSummary: string;

    msgCancelDetail: string;
    msgCancelSummary: string;

    msgInfoDetail: string;
    msgInfoSummary: string;

    // Variables size Page
    sizePage: number;
    sizePageModal: number;

    constructor() {
        // Etiqueta de Controles
        this.cNuevo = 'Nuevo';
        this.cBuscar = 'Buscar';
        this.cConsultar = 'Consultar';
        this.cGrabar = 'Grabar';
        this.cCancelar = 'Cancelar';
        this.cEliminar = 'Eliminar';
        this.cRegresar = 'Regresar';
        this.cListar = 'Listar';
        this.cImprimir = 'Imp. Venta';
        this.cAgregar = 'Agregar';
        this.cAceptar = 'Aceptar';
        this.cSalir = 'Salir';
        this.cCerrar = 'Cerrar';
        this.cAnular = 'Anular';

        this.cToastPosition = 'bottom-right';

        // style 
        this.cStyleButtonSecundario = 'ui-button-secondary'
        this.cStyleButtonSuccess = 'ui-button-success'

        // Iconos

        this.icoEditar = 'pi pi-pencil';
        this.icoNuevo = 'pi pi-plus';
        this.icoBuscar = 'pi pi-search';
        this.icoConsultar = 'fa fa-list';
        this.icoGrabar = 'pi pi-save';
        this.icoEliminar = 'pi pi-trash';
        this.icoCancelar = 'pi pi-times';
        this.icoRegresar = 'pi pi-sign-out';
        this.icoListar = 'fa fa-list';
        this.icoImprimir = 'fa fa-print';
        this.icoAceptar = 'fa fa-check';
        this.icoPlus = 'fa fa-plus';
        this.icoMinus = 'fa fa-minus';
        this.icoSalir = 'fa fa-power-off';
        this.icoMedico = 'fa fa-medkit';
        this.icoView = 'fa fa-eye';
        this.icoAlert = 'fa fa-exclamation-triangle'
        // Titulo
        this.titleEliminar = 'Confirmación de Eliminación';
        this.subTitleEliminar = '¿Seguro de Eliminar el registro seleccionado?';

        this.titleAnular = 'Confirmación de Anulación';
        this.subTitleAnular = '¿Seguro de Anular el registro seleccionado?';

        this.titleCierre = 'Confirmación de Cierre';
        this.subTitleCierre = '¿Seguro de Cerrar el registro seleccionado?';

        this.titleGrabar = 'Confirmar registro de Vale de Venta';
        this.subTitleGrabar = '¿Seguro de grabar vale de venta?';

        // Msg Prime Ng
        this.msgExitoSummary = 'Mensaje de Éxito : ';
        this.msgExitoDetail = 'Se realizo correctamente...!!!';

        this.msgErrorSummary = 'Mensaje de Error : ';

        this.msgCancelSummary = 'Mensaje de Cancelación : ';
        this.msgCancelDetail = 'Se cancelo la accion con Éxito...!!!';

        this.msgInfoSummary = 'Mensaje de Información : ';
        this.msgInfoDetail = 'Se informo con Éxito...!!!';

        // Numero de Filas
        this.sizePage = 20;
        this.sizePageModal = 10;
    }
}