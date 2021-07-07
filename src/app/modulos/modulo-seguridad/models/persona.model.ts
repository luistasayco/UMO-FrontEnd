import { UsuarioModel } from './usuario.model';
import { EmpresaPorUsuarioModel } from './empresa-por-usuario';
import { SubTipoExplotacionPorUsuarioModel } from './sub-tipo-explotacion-por-usuario.model';
import { AprobarSubTipoExplotacionPorUsuarioModel } from './aprobar-sub-tipo-explotacion-por-usuario';
import { PlantaPorUsuarioModel } from './planta-por-usuario';
export class PersonaModel {
    idPersona?: number;
    nombre: string;
    usuario?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    nombreCompleto?: string;
    nroDocumento?: string;
    nroTelefono?: string;
    flgActivo?: boolean;
    descripcionPerfil?: string;
    entidadUsuario?: UsuarioModel;

    // Auditoria
    regUsuario?: number;
    regEstacion?: string;

    constructor(){
        this.idPersona = 0;
        this.nombre = '';
        this.usuario = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombreCompleto = '';
        this.nroDocumento = '';
        this.nroTelefono = '';
        this.flgActivo = true;
        this.descripcionPerfil = '';
        this.regUsuario = 0;
        this.regEstacion = '';
    }
}