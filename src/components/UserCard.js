import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => (
  <div className="border bg-slate-50 text-black p-4 rounded shadow hover:shadow-lg">
    <h2 className="text-lg font-semibold">{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.company.name}</p>
    <Link to={`/users/${user.id}`} className="text-blue-500 mt-2 inline-block">
      View Details
    </Link>
  </div>
);

export default UserCard;
