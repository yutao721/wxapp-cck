import * as I from '../config/index';
import { Http } from '../lib/http';

const app = getApp();

export class Detail extends Http {
  constructor() {
    super();
  }

  getList(data) {
    return this.request(I.getList, 'GET', data);
  }

  mobileAuth(data) {
    return this.request(I.getDetail, 'GET', data);
  }

}
