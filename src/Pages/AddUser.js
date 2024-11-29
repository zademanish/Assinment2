import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../Store/Slices/userSlice";
import { toast } from "react-toastify";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    suite: "",
    street: "",
    city: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!formData.name || !formData.company) return toast.error(`Name and company fields are required!`);
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Email should have special character!")
    if (!formData.phone) return toast.error("phone Number is required")
    if (!formData.suite || !formData.street || !formData.city) return toast.error(`Address fields are required!`);

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: { name: formData.company },
      address: {
        suite: formData.suite,
        street: formData.street,
        city: formData.city,
      },
    };

    dispatch(addUser(newUser));
    toast.success("User added successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-screen-7xl h-screen  bg-[#000000c5] flex justify-center items-center">
      <div className="p-8  w-[30rem] rounded-md bg-slate-900 text-white">

      <h2 className="text-4xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
            />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
            />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
            />
        </div>
        <div>
          <label className="block font-medium ">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
            />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="suite"
            value={formData.suite}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
          />
        </div>
        <div>
          <label className="block font-medium">Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black  bg-[#ffffffe0] outline-none"
            />
        </div>
        <div>
          <label className="block font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-[#ffffffe0] outline-none"
            />
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <Link to="/">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
              Back
            </button>
          </Link>
        </div>
      </form>
              </div>
    </div>
  );
};

export default AddUser;
