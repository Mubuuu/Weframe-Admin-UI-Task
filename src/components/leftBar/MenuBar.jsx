import React from "react";

const MenuBar = ({menus,name}) => {
  return (
    <div
      className={`${
        name !== "PROJECTS" ? "py-[30px]" : "py-[20px]"
      } flex flex-col  border-b-[1px] border-[#E9EBF0]`}
    >
      <div className="flex justify-between items-center mb-[28px]">
        <p className="text-[#98A2B2] text-[12px] font-semibold uppercase">
          {name}
        </p>
        <img
          src="https://dashboard-ui-x.vercel.app/images/expand_less.svg"
          className="cursor-pointer"
          height="20"
          width="20"
          alt="logo"
        />
      </div>
      <div className="flex flex-col gap-5">
        {menus.map((item) => (
          <>
            <div className="flex items-center justify-between gap-4 cursor-pointer">
              <div className="flex items-center gap-2">
                <img
                  src={item.icon}
                  height="20"
                  width="20"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  alt="logo"
                />
                <p className="text-[12px] font-medium">{item.name}</p>
              </div>
              {
                <p
                  className={`${
                    item.count > 0 ? "bg-[#3B82F6]" : ""
                  } text-[10px] font-extrabold text-[#2563EB]  bg-opacity-10 px-[8px] py-[4px] rounded-full`}
                >
                  {item.count > 0 && item.count}
                </p>
              }
            </div>
          </>
        ))}
        {name==="PROJECTS" ? <div className="flex items-center justify-between gap-4 cursor-pointer">
              <div className="flex items-center gap-2">
                <img
                  src="https://dashboard-ui-x.vercel.app/images/add_circle.svg"
                  height="20"
                  width="20"
                  loading="lazy"
                  style={{ color: "transparent" }}
                  alt="logo"
                />
                <p className="text-[12px] font-medium">Add New Project</p>
              </div>
            </div>:null}
        
      </div>
    </div>
  );
};

export default MenuBar;
