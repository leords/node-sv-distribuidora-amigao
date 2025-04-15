import { Router } from "express";
import { ReadVehicleController } from "../controller/vehicle/readVehicleController.js";
import { UpdateVehicleController } from "../controller/vehicle/updateVehicleController.js";
import { DeleteVehicleController } from "../controller/vehicle/deleteVehicleController.js";
import { CreateVehicleController } from "../controller/vehicle/createVehicleController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { accessControl } from "../middleware/accessControl.js";

// Necessário usar .bind(this) após middlewares para manter o contexto da classe,
// mesmo sem usar "this" dentro do método.

// lembrando que o accessControl é , usuário = 1, supervisor = 2, admin = 3 e sempre passar como string
const router = Router();
const createVehicleController = new CreateVehicleController();

router.post(
  "/new-vehicle", 
  authMiddleware, 
  accessControl(['3']), 
  createVehicleController.handle.bind(createVehicleController)
);

router.get(
  "/read-vehicle", 
  new ReadVehicleController().handle
);

router.patch(
  "/update-vehicle-status",
  new UpdateVehicleController().HandleEditStatusVehicle
);
router.patch(
  "/update-vehicle-license-plate",
  new UpdateVehicleController().HandleEditLicensePlateVehicle
);
router.delete(
  "/delete-vehicle", 
  new DeleteVehicleController().handle
);

export { router as vehicleRouter };
