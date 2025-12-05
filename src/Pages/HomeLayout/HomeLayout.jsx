import React from "react";
import Navbar from "../../Components/NavBar/NavBar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20">
        {/* Page content goes here */}
        <h1 className="text-center text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
      </div>
    </div>
  );
};

export default HomeLayout;
