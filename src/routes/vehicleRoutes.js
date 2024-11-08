import { Router } from "express";
import { ReadVehicleController } from "../controller/vehicle/readVehicleController";
import { UpdateVehicleController } from "../controller/vehicle/updateVehicleController";
import { DeleteVehicleController } from "../controller/vehicle/deleteVehicleController";

const router = Router();
router.post("/new-vehicle", new ReadVehicleController().handle);
router.get("/read-vehicle-id", new ReadVehicleController().handle);
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
