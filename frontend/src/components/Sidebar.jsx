import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-80 bg-white text-blue flex flex-col ">
      <div className="flex p-5 justify-center w-full">
        <Link to={"/"} className="">
          <img src="/Logo.png" alt="" className="pt-5" />
        </Link>
      </div>

      <Button label="Convert & Chat" to={"/"}></Button>
      <Button label="Teams" to={"/teams"}></Button>
      <Button label="Documents" to={"/documents"}></Button>
      <Button label="Planner" to={"/planner"}></Button>
      <Button label="Prepare With Team" to={"/prepare-with-team"}></Button>

      <div className="flex justify-center mt-auto p-1 mx-6 mb-4">
        <img
          src={"/Mask group.png"}
          alt=""
          className="w-16 h-16 rounded-full z-10"
        />
        <p className="text-base font-medium pl-4 pt-4 z-0">Marie Felix T</p>
      </div>
    </aside>
  );
};
