import hospedagemRepository from "../repository/hospedagem.repositoy.js";


async function createHospedagem(account) {
  // console.log(account)
  // if(!account || !account.id_document || !account.id_document.tax_id_number || account.id_document.tax_id_number.length < 11
  //   || !account.id_document.address.country){
  //   throw new Error("Bad request");
  // }
  return hospedagemRepository.insertHospedagem(account);
}

async function getHospedagem() { 
  return hospedagemRepository.getHospedagem();
}

// async function getSubmembers(id) {
//   return submemberRepository.getSubmembers(id);
// }

// async function createOrder(order, id) {
//   return submemberRepository.createOrder(order, id);
// }

// async function createInternalCashIn(order, id) {
//   return submemberRepository.createInternalCashIn(order, id);
// }

export default {
  createHospedagem, getHospedagem
  // , getSubmembers, createOrder, createInternalCashIn
};