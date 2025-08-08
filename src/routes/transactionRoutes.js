import { Router } from "express";
import { CreateTransactionController } from "../controller/transaction/createTransactionController.js";
import { DeleteTransactionController } from "../controller/transaction/deleteTransactionController.js";
import { UpdateTransactionController } from "../controller/transaction/updateTransactionController.js";

const router = Router();

router.post("/transaction", new CreateTransactionController().handle);
router.delete("/delete-transaction", new DeleteTransactionController().handle);
router.patch("/update-transaction", new UpdateTransactionController().handle);

export { router as transactionRouter };
