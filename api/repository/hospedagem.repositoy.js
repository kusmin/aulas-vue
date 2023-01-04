import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function insertHospedagem(account) {
  const jsonData = JSON.parse(await readFile(fileName));

  jsonData.hospedagem.push(account);

  await writeFile(fileName, JSON.stringify(jsonData, null, 2));

  return {
    account
    }
    };
async function getHospedagem() {
  console.log("chefuei")
  const jsonData = JSON.parse(await readFile(fileName));

  console.log(typeof jsonData)
  return jsonData.hospedagem;
  
}

// async function getListSubmembers() {
//   const jsonData = JSON.parse(await readFile(fileName));
//   return jsonData.submember;
// }


// async function getSubmembers(id) {
//   const accounts = await getListSubmembers();
//   const account = accounts.find((acount) => acount.sn === id);
//   if (account) {
//       return {
//         "data": [
//             {
//                 "currency_symbol": "brl",
//                 "balance": "0.0",
//                 "balance_available": "0.0",
//                 "balance_locked": "0.0"
//             }
//         ]
//     };
//   } else {
//       throw new Error("Registro não encontrado.");
//   }
// }

// async function createOrder(order, id){
//   const accounts = await getListSubmembers();
//   const account = accounts.find((acount) => acount.sn === id);
//   if(account){
//     const jsonData = JSON.parse(await readFile(fileName));
//     jsonData.self.push(order);
//     return {
//       "sn": `${id}`,
//       "client_order_id": `${gerarNumeroAleatorio()}`
//     }
//   }else {
//     throw new Error("Registro não encontrado.");
//   }
// }

// async function createInternalCashIn(order, id){
//   const accounts = await getListSubmembers();
//   const account = accounts.find((acount) => acount.sn === id);
//   if(account){
//     const jsonData = JSON.parse(await readFile(fileName));
//     console.log(jsonData);
//     jsonData.internal.push(order);
//     return {
//       "your_account": {
//         "currency_symbol": "btc",
//         "balance": "10000.0",
//         "balance_available": "9000.0",
//         "balance_locked": "1000.0"
//       },
//       "sub_member_account": {
//         "currency_symbol": "btc",
//         "balance": "10000.0",
//         "balance_available": "9000.0",
//         "balance_locked": "1000.0"
//       }
//     }
//   }else {
//     throw new Error("Registro não encontrado.");
//   }
// }

// function gerarNumeroAleatorio(){
//   return Math.floor(Math.random() * 65536);
// }

export default {insertHospedagem, getHospedagem
  // , getSubmembers, createOrder, createInternalCashIn
};