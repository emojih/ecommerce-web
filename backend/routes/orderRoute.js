import express from "express";
import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import optionalAuth from "../middleware/optionalAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/delete", adminAuth, deleteOrder);

// Payment Features

orderRouter.post("/place", optionalAuth, placeOrder);

// User Feature

orderRouter.post("/userorders", optionalAuth, userOrders);

export default orderRouter;
