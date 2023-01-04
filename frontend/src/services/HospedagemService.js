import instance from "./Api";

export default class HospedagemService {
  createHospedagem(hospedagem, callback) {
    instance
      .post("http://localhost:3000/api/v1/hospedagem", hospedagem)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        callback(error, null);
      });
  }

  getHospedagem(callback) {
    instance
      .get("http://localhost:3000/api/v1/hospedagem")
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        callback(error, null);
      });
  }
}
