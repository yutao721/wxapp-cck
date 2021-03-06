import * as I from '../config/index';
import { Http } from '../lib/http';

const app = getApp();

export class Index extends Http {
  constructor() {
    super();
  }

  getBannerList(data) {
    return this.request(I.getBannerList, 'GET', data);
  }

  getInfoTypeList(data) {
    return this.request(I.getInfoTypeList, 'GET', data);
  }

  getList(id) {
    return this.request(I.getList(id), 'GET');
  }

  getDetail(id) {
    return this.request(I.getDetail(id), 'GET');
  }

}
