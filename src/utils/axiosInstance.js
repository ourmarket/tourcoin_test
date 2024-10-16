import axios from "axios";

// Función para obtener el token de autenticación del localStorage
const getAuthToken = () => localStorage.getItem("authToken");

// Función para obtener el refresh token del localStorage
const getRefreshToken = () => localStorage.getItem("refreshToken");

// Función para guardar el nuevo accessToken en el localStorage
const setAuthToken = (token) => localStorage.setItem("authToken", token);

// Crear una instancia de axios con configuración predeterminada
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Cambia esto si el backend está en una URL diferente
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor para agregar los tokens a cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = getAuthToken();

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para manejar errores de respuesta
axiosInstance.interceptors.response.use(
  (response) => response, // Si la respuesta es correcta, devolverla
  async (error) => {
    const originalRequest = error.config;

    // Si el error es por un token expirado y no hemos intentado refrescar el token aún
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Evita bucles infinitos

      try {
        // Intentar refrescar el token
        const refreshToken = getRefreshToken();

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
          { token: refreshToken }
        );

        const newAccessToken = data.accessToken;

        // Guardar el nuevo accessToken en el localStorage
        setAuthToken(newAccessToken);

        // Actualizar el header Authorization en la solicitud original con el nuevo token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Reintentar la solicitud original con el nuevo token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Si refrescar el token falla, redirigir al usuario al login o manejar el error
        console.error("Error refreshing token:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
