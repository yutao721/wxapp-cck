import * as I from '../config/material';
import { Http } from '../lib/http';

const app = getApp();

export class Material extends Http {
  constructor() {
    super();
  }

  getList(data) {
    return this.request(I.getList, 'POST', data);
  }

  getLearnList(docType) {
    return this.request(I.getLearnList(docType), 'GET');
  }

}
