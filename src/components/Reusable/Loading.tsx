import React from "react";
import { BiLoader } from "react-icons/bi";

const Loading: React.FC = () => {
  return (
    <>
      <div className="loading">
        <BiLoader />
      </div>
    </>
  );
};

export default Loading;
