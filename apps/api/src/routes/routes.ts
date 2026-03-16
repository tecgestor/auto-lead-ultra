import { Router } from "express"
import { searchVehicles } from "../controllers/vehicleController"

const router = Router()

router.get("/vehicles", searchVehicles)

export default router
