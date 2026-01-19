import orderModel from "../models/orderModel.js";

// global variables
const currency = "ngn";
const deliveryCharge = 3000;

// ============================
// PLACE ORDER (BANK TRANSFER)
// ============================
const placeOrder = async (req, res) => {
  try {
    const { items, amount, address, userId } = req.body;

    // basic validation (server-side safety)
    if (!address?.firstName || !address?.street || !address?.phone) {
      return res.json({
        success: false,
        message: "Name, street and phone number are required",
      });
    }

    const orderData = {
      userId: userId || null, // allow guest checkout
      items,
      address,
      amount,
      paymentMethod: "BANK_TRANSFER",
      payment: false,
      status: "Pending Payment",
      currency,
      deliveryCharge,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ============================
// ADMIN – GET ALL ORDERS
// ============================
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ date: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ============================
// USER ORDERS (OPTIONAL)
// ============================
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: true, orders: [] });
    }

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// ============================
// ADMIN – UPDATE ORDER STATUS
// ============================
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const updateData = { status };

    // Automatically mark payment as done once status progresses
    if (status !== "Order Placed") {
      updateData.payment = true;
    }

    await orderModel.findByIdAndUpdate(orderId, updateData);

    res.json({ success: true, message: "Order status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ============================
// ADMIN – DELETE ORDER
// ============================
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }

    // Prevent deletion if status is not "Order Placed"
    if (order.status !== "Order Placed") {
      return res.json({
        success: false,
        message: "Cannot delete order once it has been processed",
      });
    }

    await orderModel.findByIdAndDelete(orderId);

    res.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, allOrders, userOrders, deleteOrder, updateStatus };
