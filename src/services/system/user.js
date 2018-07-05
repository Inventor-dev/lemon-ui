import { stringify } from 'qs';
import request from '../../utils/request';

export async function queryUser(params) {
  return request(`/api/system/user?${stringify(params)}`);
}

export async function removeUser(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addUser(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}
