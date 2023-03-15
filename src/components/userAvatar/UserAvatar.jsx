import React from "react";

const UserAvatar = ({users,count}) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-2">
        <div className="flex -space-x-4">
          {users.map(
            (item, index) =>
              index < count && (
                <img
                  src={item}
                  className="border-2 border-white rounded-full"
                  width="40"
                  height="40"
                  alt="Icon"
                  style={{ color: "transparent" }}
                />
              )
          )}
          {users.length > count && (
            <p className="flex items-center justify-center w-10 h-10 text-xs font-medium text-[#606C80] bg-[#F2F4F7] rounded-full cursor-pointer">{`+${
              users.length - count
            }`}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
