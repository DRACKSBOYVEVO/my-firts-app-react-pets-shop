// Importamos la librería Axios, que nos permite realizar peticiones HTTP.
import axios from "axios";

// Creamos una instancia de Axios con una base de URL específica para comunicarnos con el servidor JSON.
export const api = axios.create({
    baseURL: "http://localhost:5000" // La URL base donde se encuentra el servidor JSON.
});

// Función para realizar una solicitud GET al servidor JSON y actualizar los datos en el estado local.
export const buscar = async (url, setData) => {
    // Realizamos una solicitud GET a la URL proporcionada como argumento.
    const respuesta = await api.get(url);

    // Actualizamos el estado local (setData) con los datos recibidos en la respuesta.
    setData(respuesta.data);
};