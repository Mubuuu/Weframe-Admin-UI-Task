import React from "react";

const Rightbar = () => {
  const menus = [
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75",
      count: 12,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-5.jpg&w=48&q=75",
      count: 4,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75",
      count: 0,
      active: true,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
      count: 0,
    },

    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-2.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-3.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-4.jpg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-5.jpg&w=48&q=75",
      count: 4,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75",
      count: 0,
    },
    {
      img: "https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar-1.jpg&w=48&q=75",
      count: 0,
    },
  ];
  return (
    <div className="min-h-full hidden lg:block" style={{ transform: "none" }}>
      <div className="flex flex-col min-h-full">
        <div className="p-[33px] border-b-[1px] border-l-[1px] border-[#E9EBF0]">
          <img
            src="https://dashboard-ui-x.vercel.app/images/close.svg"
            height="21"
            width="21"
            class="cursor-pointer"
            loading="lazy"
            style={{ color: "transparent" }}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]">
          {menus.map((item) => (
            <div className="relative">
              <img
                src={item.img}
                height="35"
                width="35"
                class={`${
                  item.active ? "ring-2 ring-[#3B82F6]" : ""
                } rounded-full cursor-pointer false`}
                loading="lazy"
                style={{ color: "transparent" }}
                alt="img"
              />
              {item.count > 0 && (
                <span className="-top-2 left-6 absolute text-[10px] bg-red-500 px-[6px] py-[2px] rounded-full text-white font-bold">
                  {item.count}
                </span>
              )}
              <span
                className={`${
                  item.active ? "bg-green-500" : "bg-red-500"
                } bottom-0 left-6 absolute w-3.5 h-3.5  border-2 border-white rounded-full`}
              ></span>
            </div>
          ))}
        </div>
        <div className="p-[33px] border-b-[1px] border-t-[1px] border-l-[1px] border-[#E9EBF0]">
          <img
            src="https://dashboard-ui-x.vercel.app/images/arrow_forward.svg"
            width="21"
            height="21"
            class="cursor-pointer"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
