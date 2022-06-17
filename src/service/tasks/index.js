import { apiService } from '../apiService';

export const getTasks = (userId) => apiService(`/tasks?userId=${userId}`, 'get');
