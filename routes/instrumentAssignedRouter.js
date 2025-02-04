import { Router } from "express";
import { instrumentAssignedController } from "../controllers/instrumentAssignedController.js";

const instrumentAssignedRouter = Router()
const { assign, getAllAssignedInstrument, getAllAssignedInstrumentById } = instrumentAssignedController()

instrumentAssignedRouter.route('/instrument-assigned')
    .post(assign)
    .get(getAllAssignedInstrument)

instrumentAssignedRouter.route('/instrument-assigned/:id')
    .get(getAllAssignedInstrumentById)

export default instrumentAssignedRouter