import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetail = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div>
      {toast.error("User not found")}
      <Link to="/" className="text-blue-500 underline">
          Go back to User List
        </Link>
      </div>
     
    );
  }

  return (
    <div className="bg-slate-800 h-screen">

    <div className="p-8 max-w-md mx-auto rounded-md ">
      <div className="space-y-2 bg-slate-100 p-4 rounded-md ">
      <h2 className="text-3xl font-bold mb-4">User Details</h2>
        <p>
          <strong>Name:</strong> {user.name} 
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name || user.company}
        </p>
        <p>
          <strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
        </p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back to User List
      </Link>
      </div>
    </div>
    </div>
  );
};

export default UserDetail;
