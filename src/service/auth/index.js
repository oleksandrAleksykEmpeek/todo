import { apiService } from '../apiService';

export const authLogin = async () => apiService('/users', 'get');
