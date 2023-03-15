import React from "react";
import UserAvatar from "../userAvatar/UserAvatar";

const TaskboardHeader = () => {

    const menus=["Calendar","Dashboard","Progress","Progress","Forms","More"]
    const images=[
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75",
        "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75",
    ]

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-2 items-center px-[16px] md:px-[36px] py-[28px]">
      <div className="flex items-center gap-[24px]">
        <p className="text-[#1F2633] font-semibold text-3xl">Task Boards</p>
        <img
          src="https://dashboard-ui-x.vercel.app/images/edit.svg"
          width="20"
          height="20"
          alt="pensil"
          loading="lazy"
          style={{ color: "transparent" }}
        />
      </div>
      <div className='flex justify-center gap-[10px] md:gap-[24px] xl:gap-[32px] flex-wrap"'>
        <p className="font-semibold text-[11px] cursor-pointer text-[#3B82F6] underline decoration-1 decoration-[#3B82F6] underline-offset-8">
          Timeline
        </p>
        {menus.map((item) => (
          <p className="font-semibold text-[11px] cursor-pointer text-[#7A8699]">
           
            {item}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <UserAvatar users={images} count ={4} />
        <img
          src="https://dashboard-ui-x.vercel.app/images/add_button.svg"
          loading="lazy"
          width="40"
          height="40"
          class="cursor-pointer"
          style={{ color: "transparent" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default TaskboardHeader;
