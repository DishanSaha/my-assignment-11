import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import UseAuth from './UseAuth';

// Create an Axios instance
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/api/v1', // centralized base URL
});

export default function UseAxios() {
    const { user, signOutUser } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // --- Request interceptor
        const reqInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                if (user?.accessToken) {
                    config.headers.Authorization = `Bearer ${user.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // --- Response interceptor
        const resInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const status = error.response?.status;
                if (status === 401 || status === 403) {
                    await signOutUser();
                    navigate('/login', { replace: true });
                }
                return Promise.reject(error);
            }
        );

        // Cleanup interceptors on unmount
        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [user, signOutUser, navigate]);

    return axiosSecure;
}
