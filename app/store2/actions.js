import Constantes from './constantes';

export const RegistroActions = values => ({
  type: Constantes.REGISTRO,
  datos: values
});

export const CargarImagenActions = values => ({
  type: Constantes.CARGAR_IMAGEN_SINGUP,
  imagen: values
});

export const LimpiarImagenActions = () => ({
  type: Constantes.LIMPIAR_IMAGEN_SINGUP,
});

export const LoginActions = values => ({
  type: Constantes.LOGIN,
  datos: values
});

export const EstablecerSesionAction = values => ({
  type: Constantes.ESTABLECER_SESSION,
  usuario: values
});

export const CerrarSesionAction = () => ({
  type: Constantes.CERRAR_SESSION
});

export const CargarImagenPublicacionActions = imagen => ({
  type: Constantes.CARGAR_IMAGEN_PUBLICACION,
  imagen
});

export const LimpiarImagenPublicacionActions = ()=> ({
  type: Constantes.LIMPIAR_IMAGEN_PUBLICACION,
});
