import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./../users/userSlice";

function ViewUser() {
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <>
      <h1>My Users</h1>
      <h4>Number of Users : {users.length}</h4>
      <Link to="/add-users">
        <button>Add New Users</button>
      </Link>
      <br />
      {/* Mapping the Users  */}
      <div>
        <span>
          <b>ID &nbsp;</b>
          <b>Name &nbsp;</b>
          <b>Address &nbsp;</b>
          <b>Operations &nbsp;</b>
        </span>
        {users.map((item, index) => {
          return (
            <div
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.address}</p>
              <div>
                <Link to={"/update-users/" + index}>
                  <button>Update</button>
                </Link>
                <button onClick={() => dispatch(removeUser(index))}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ViewUser;
