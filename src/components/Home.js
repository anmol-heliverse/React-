import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const users = useSelector((state) => state.user.user);
  console.log(users);
  return (
    <>
      <h1>Heliverse Task 1</h1>
      <h4>Number of Users : {users.length}</h4>
      <Link to="/view-users">
        <button>View Users</button>
      </Link>
    </>
  );
}

export default Home;
