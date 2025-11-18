import express from "express"
import ControllerUser from "../controller/users.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/Login", ControllerUser.Login)

//  api/v1


router.get("/user/context",ControllerUser.FindOne) 
router.post("/user/", ControllerUser.Create) 
router.put("/user/",ControllerUser.Update) 
router.delete("/user/",ControllerUser.Delete) 

router.get("/users",  ControllerUser.FindAll) //pegar todos
router.get("/user/:id",  ControllerUser.FindOne) //pegar um
router.post("/user/admin",  ControllerUser.Create) //cadastrar um
router.put("/user/:id",  ControllerUser.Update) //alterar um
router.delete("/user/:id", ControllerUser.Delete) // deletar um

export default router