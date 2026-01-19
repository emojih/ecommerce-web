import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
    token,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.street || !formData.phone) {
      toast.info("Please fill in Name, Street and Phone number");
      return;
    }

    // Check if any items selected
    const subtotal = getCartAmount();
    if (subtotal === 0) {
      toast.info("No order selected. Please add items to your cart.");
      return;
    }

    try {
      // build order items
      let orderItems = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          const product = products.find((p) => p._id === itemId);
          if (product) {
            orderItems.push({
              ...product,
              quantity: cartItems[itemId],
            });
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: subtotal + delivery_fee, // ensure amount is correct
        userId: token ? undefined : null,
      };

      const { data } = await axios.post(
        `${backendUrl}/api/order/place`,
        orderData,
        { headers: { token } }
      );

      if (data.success) {
        setCartItems({});
        navigate(`/payment-instructions/${data.orderId}`, {
          state: { amount: orderData.amount }, // pass correct amount
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            placeholder="First name"
            className="border rounded py-1.5 px-3.5 w-full"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            placeholder="Last name"
            className="border rounded py-1.5 px-3.5 w-full"
          />
        </div>

        <input
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Email"
          className="border rounded py-1.5 px-3.5 w-full"
        />

        <input
          name="street"
          value={formData.street}
          onChange={onChangeHandler}
          placeholder="Street"
          className="border rounded py-1.5 px-3.5 w-full"
          required
        />

        <input
          name="state"
          value={formData.state}
          onChange={onChangeHandler}
          placeholder="State"
          className="border rounded py-1.5 px-3.5 w-full"
        />

        <input
          name="country"
          value={formData.country}
          onChange={onChangeHandler}
          placeholder="Country"
          className="border rounded py-1.5 px-3.5 w-full"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          placeholder="Phone"
          className="border rounded py-1.5 px-3.5 w-full"
          required
        />
      </div>

      {/* Right */}
      <div className="mt-8 min-w-80">
        <CartTotal />
        <div className="text-end mt-8">
          <button
            type="submit"
            className="bg-black text-white px-16 py-3 text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
