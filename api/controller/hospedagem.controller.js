import hospedagemService from "../service/hospedagem.service.js";

async function createHospedagem(req, res, next) {
    try {
        let account = req.body;
        account = await hospedagemService.createHospedagem(account);
        res.status(201).send(account);
        logger.info(`Post /hospedagem - ${JSON.stringify(account)}`);
    } catch (err) {
        next(err);
    }
}

async function getHospedagem(req, res, next) {
    try {
        const hospedagens = await hospedagemService.getHospedagem()
        res.status(200).send(hospedagens);
        logger.info(`Get /hospedagem - ${JSON.stringify(hospedagens)} `);
    } catch (err) {
        next(err);
    }
} 

// async function getSubmembers(req, res, next) {
//   try {
//       res.send(await submemberService.getSubmembers(req.params.sub_member_sn));
//       logger.info(`GET /submembers/:sub_member_sn/accounts`);
//   } catch (err) {
//       next(err);
//   }
// }

// async function createOrder(req, res, next) {
//     try {
//         let order = req.body;
//         let response = await submemberService.createOrder(order, req.params.sub_member_sn);
//         res.status(201).send(response);
//         logger.info(`POST /submembers/order/simple_buy - ${JSON.stringify(response)}`);
//     } catch (err) {
//         next(err);
//     }
// }

// async function createInternalCashIn(req, res, next) {
//     try {
//         let order = req.body;
//         let response = await submemberService.createInternalCashIn(order, req.params.sub_member_sn);
//         res.status(201).send(response);
//         logger.info(`POST /submembers/internal_cash_in - ${JSON.stringify(response)}`);
//     } catch (err) {
//         next(err);
//     }
// }

export default { createHospedagem, getHospedagem
    // , getSubmembers, createOrder, createInternalCashIn
};