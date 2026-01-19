import express from "express";

import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import optionalAuth from "../middleware/optionalAuth.js";

const cartRouter = express.Router();

cartRouter.post("/get", optionalAuth, getUserCart);
cartRouter.post("/add", optionalAuth, addToCart);
cartRouter.post("/update", optionalAuth, updateCart);

export default cartRouter;
