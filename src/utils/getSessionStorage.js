export const useSessionStorage = (name, value = '', action = 'get') => {
  if (action === 'get') return sessionStorage.getItem(name);
  return sessionStorage.setItem(name, value);
};
