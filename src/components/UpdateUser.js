import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./../users/userSlice";

function UpdateUser() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

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
          dispatch(editUser({ id, name, address }));
          navigate("/view-users");
        }}
      >
        Update User
      </button>
    </>
  );
}

export default UpdateUser;
