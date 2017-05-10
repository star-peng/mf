import axios from 'axios';

let base = '';

let proxy={
		 host: '192.168.1.72',
		 port: 8080,
   }

// 用于设置跨域请求代理


export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const carUserList = params => { console.log(params); return axios.get(`${base}/mfcxfk/bikeStatistics/bikeList`, {baseURL:`http://192.168.1.72:8080`, params: params,responseType: 'json' }); };