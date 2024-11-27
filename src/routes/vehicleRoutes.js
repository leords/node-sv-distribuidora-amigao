import { Router } from "express";
import { ReadVehicleController } from "../controller/vehicle/readVehicleController.js";
import { UpdateVehicleController } from "../controller/vehicle/updateVehicleController.js";
import { DeleteVehicleController } from "../controller/vehicle/deleteVehicleController.js";
import { CreateVehicleController } from "../controller/vehicle/createVehicleController.js";

const router = Router();
router.post("/new-vehicle", new CreateVehicleController().handle);
router.get("/read-vehicle", new ReadVehicleController().handle);
router.patch(
  "/update-vehicle-status",
  new UpdateVehicleController().HandleEditStatusVehicle
);
router.patch(
  "/update-vehicle-license-plate",
  new UpdateVehicleController().HandleEditLicensePlateVehicle
);
router.delete("/delete-vehicle", new DeleteVehicleController().handle);

export { router as vehicleRouter };
