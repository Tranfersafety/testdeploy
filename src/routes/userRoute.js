import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

// API - 1 Register
router.post("/register", userController.createUser);
// API - 2 Login
router.post("/login", userController.login);
// API - 3 Verify Email
router.get("/verify-email", userController.verifyEmail);
// API - 1 RegisterForAdmin
router.post("/registerForAdmin", userController.createUserForAdmin);
// API OrderPinned
router.get("/Top-Car", userController.orderPinned);
// API - Edit
router.put("/", userController.editUser);

//API - Forget Password
router.post("/password", userController.forgetPassword);

// Api -get profile by id
router.get("/profile/:id", userController.viewprofilebyID);

// api get profile all
router.get("/profile", userController.viewprofile);

// api delect cat fav
router.delete("/delete/:id/:pinnedID", userController.deleteFav);

//Api for send profile picture url to db
router.patch("/uploadprofilepicture", userController.uploadProfile);

// API - SoftDelete
router.delete("/:email", userController.deleteUserEmail);

//API - Add favourite car
// router.post("/:id/:pinnedID",userController.deleteFav)

// API - 8  Add movie to movie list
// router.post('/:movieListId/movies/:movieId', movieListController.addMovieToMovieList);

export default router;
