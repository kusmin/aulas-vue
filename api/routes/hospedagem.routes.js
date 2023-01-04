import express from "express";
import hospedagemController from "../controller/hospedagem.controller.js";


const router = express.Router();

router.post("/", hospedagemController.createHospedagem);
router.get("/", hospedagemController.getHospedagem);
// router.get("/:sub_member_sn/accounts", submemberController.getSubmembers);
// router.post("/:sub_member_sn/internal_cash_in", submemberController.createInternalCashIn);
// router.post("/:sub_member_sn/order/simple_buy", submemberController.createOrder)
// router.post("/:sub_member_sn/order/simple_sell", submemberController.createOrder)

router.use((err, req, res, _next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    if(err.message === "Registro não encontrado."){
        res.status(404).send({
            "error": {
                "message": "Resource not found.",
                "code": 404,
                "details": [
                    "Sub-Member not found."
                ]
            }
        })
    }else{
        res.status(400).send({
            "error": {
                "message": "Bad request.",
                "code": 400,
                "details": [
                ]
            }
        })
    }
})

export default router;