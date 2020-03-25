export default class ResponseBuilder {

  constructor() {
    this.meta = {
      msg: 'operation success',
      ok: true,
    };
    this.data = {};
  }

  setData(data) {
    this.data = data;
    return this;
  }

  setOk(ok) {
    this.meta.ok = ok;
    return this;
  }

  setMsg(msg) {
    this.meta.msg = msg;
    return this;
  }

  build() {
    return {
      meta: this.meta,
      data: this.data,
    };
  }
}
