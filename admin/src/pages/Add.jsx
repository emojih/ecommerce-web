// Add.jsx  (formerly add.jsx)
import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const Add = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const MAX_TOTAL_IMAGE_SIZE = 5 * 1024 * 1024;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men",
    bestseller: false,
  });

  const [loading, setLoading] = useState(isEditMode); // show loading when editing
  const [existingImages, setExistingImages] = useState([]);
  // Fetch product data when in edit mode
  useEffect(() => {
    if (!isEditMode || !id) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/product/single/${id}`, {
          headers: { token },
        });

        if (res.data.success) {
          const p = res.data.product;
          setFormData({
            name: p.name || "",
            description: p.description || "",
            price: p.price || "",
            category: p.category || "Men",
            bestseller: !!p.bestseller,
          });
          setExistingImages(p.image || []);
        } else {
          toast.error(res.data.message);
          navigate("/list");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load product");
        navigate("/list");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedImages = [image1, image2, image3, image4].filter(Boolean);

    const totalSize = selectedImages.reduce((sum, file) => sum + file.size, 0);

    if (totalSize > MAX_TOTAL_IMAGE_SIZE) {
      toast.error("Total image size must not exceed 5MB");
      return;
    }
    setLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("description", formData.description);
      formPayload.append("price", formData.price);
      formPayload.append("category", formData.category);
      formPayload.append("bestseller", formData.bestseller);

      if (image1) formPayload.append("image1", image1);
      if (image2) formPayload.append("image2", image2);
      if (image3) formPayload.append("image3", image3);
      if (image4) formPayload.append("image4", image4);

      let response;

      if (isEditMode) {
        formPayload.append("id", id);
        response = await axios.post(
          `${backendUrl}/api/product/update`,
          formPayload,
          { headers: { token, "Content-Type": "multipart/form-data" } }
        );
      } else {
        response = await axios.post(
          `${backendUrl}/api/product/add`,
          formPayload,
          { headers: { token, "Content-Type": "multipart/form-data" } }
        );
      }

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/list"); // or "/products" — wherever your list is
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6">Loading product data...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full items-start gap-3"
    >
      <p className="text-2xl font-semibold">
        {isEditMode ? "Edit Product" : "Add Product"}
      </p>

      {/* Image upload fields */}
      <div className="flex gap-4 flex-wrap">
        {[image1, image2, image3, image4].map((img, idx) => {
          const existingImg = existingImages[idx];

          return (
            <label
              key={idx}
              htmlFor={`image${idx + 1}`}
              className="cursor-pointer"
            >
              <div className="w-24 h-24 border border-gray-300 rounded flex items-center justify-center overflow-hidden">
                {img ? (
                  // NEW IMAGE SELECTED
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : existingImg ? (
                  // EXISTING IMAGE FROM DB
                  <img
                    src={existingImg}
                    alt="existing"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>
                    {" "}
                    <img src={assets.upload_area} />
                  </span>
                )}
              </div>

              <input
                onChange={(e) =>
                  handleImageChange(
                    e,
                    [setImage1, setImage2, setImage3, setImage4][idx]
                  )
                }
                type="file"
                id={`image${idx + 1}`}
                hidden
                accept="image/*"
              />
            </label>
          );
        })}
      </div>

      {/* Name */}
      <div className="w-full">
        <p>Product name</p>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-1"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p>Product description</p>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded mt-1"
          placeholder="Write content here"
          rows={4}
          required
        />
      </div>

      {/* Category, Price, Bestseller */}
      <div className="flex flex-wrap gap-4 w-full">
        <div>
          <p>Category</p>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="px-3 py-2 border rounded mt-1"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div>
          <p>Price ({currency})</p>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="px-3 py-2 border rounded mt-1"
            type="number"
            placeholder="25.00"
            required
          />
        </div>

        <div className="flex items-center gap-2 mt-6">
          <input
            name="bestseller"
            checked={formData.bestseller}
            onChange={handleChange}
            type="checkbox"
            id="bestseller"
          />
          <label htmlFor="bestseller">Bestseller</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-8 py-3 mt-4 rounded disabled:opacity-50"
      >
        {loading ? "Saving..." : isEditMode ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default Add;
