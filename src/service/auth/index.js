import { apiService } from '../apiService';

export const login = async ({ email, password }) =>
  apiService(`/users?email=${email}&password=${password}`, 'get');
