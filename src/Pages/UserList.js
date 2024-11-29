import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { fetchUsers } from "../Store/Slices/userSlice";
import { toast } from "react-toastify";
import Loaders from "../components/Loader";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (status === "idle") {
      toast.success("Fetch users successfully")
      dispatch(fetchUsers());
      
    }
  }, [status, dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (status === "loading") return <Loaders/>;
  if (status === "failed") return <p>{toast.error("something went wrong")}</p>;

  return (
    <div className="p-4 bg-[#000000c5] h-full md:h-screen">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className="flex items-center gap-4">
    <h2 className="text-4xl mx-1 py-3 font-semibold text-white">User List</h2>
    <Link to='/add-user'><button className="bg-blue-500 py-2  font-medium rounded-md px-2 text-white">Add New User</button></Link>
    </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            to={`/user/${user.id}`}
            className="p-4 border rounded bg-slate-100 shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name || user.company}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
