import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
// Placing orders using COD Method

const placeOrder = async (req,res) => {
    
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items, 
            address,
            amount, 
            paymentMethod: 'COD',
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Placed'})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }
}
// Placing orders using stripe Method

const placeOrderStripe = async (req,res) => {

}
// Placing orders using razorpay Method

const placeOrderRazorpay = async (req,res) => {

}

// All Orders data for admin panel

const allOrders = async (req,res) => {

    try {
        const orders = await orderModel.find({})
res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }


}

// User Order data for Frontend
const userOrders = async (req,res) => {

    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

// update order status from admin panel

const updateStatus = async (req,res) => {

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}
