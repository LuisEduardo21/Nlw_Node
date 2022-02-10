import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessageControlle";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import {ProfileUserController} from "./controllers/ProfileUserController"


const router = Router();


router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messsages/last3", new GetLast3MessagesController().handle)

router.get("/profile", new ProfileUserController().handle)

export {router}