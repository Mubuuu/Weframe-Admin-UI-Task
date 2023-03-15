import React from "react";

const Avatar = ({url}) => {
  return (
    <div>
      <img
        src={url}
        className="rounded-full p-[2px] ring-2 ring-[#3B82F6]"
        height="40"
        width="40"
        alt="logo"
      />
    </div>
  );
};

export default Avatar;
