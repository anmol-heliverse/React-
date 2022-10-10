import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./../users/userSlice";

function AddUser() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");

  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = users.length;
  return (
    <>
      <h5>User Name</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />

      <h5>User Address</h5>
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setaddress(e.target.value);
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(addUser({ id, name, address }));
          navigate("/view-users");
        }}
      >
        Add User
      </button>
    </>
  );
}

export default AddUser;
