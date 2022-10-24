import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Jane</span>
        <button>logout</button>
      </div>
    </div>
  );
};
export default Navbar;
