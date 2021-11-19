import * as I from '../config/staff';
import { Http } from '../lib/http';

const app = getApp();

export class Staff extends Http {
  constructor() {
    super();
  }

  getEmpTypeList(data) {
    return this.request(I.getInfoTypeList, 'GET', data);
  }

  getList(id) {
    return this.request(I.getList(id), 'GET');
  }

  getDetail(id) {
    return this.request(I.getDetail(id), 'GET');
  }

}
