import apisauce from 'apisauce';

const baseURL = 'http://192.168.0.108:5000/';

const api = apisauce.create({ baseURL });

export default api;
