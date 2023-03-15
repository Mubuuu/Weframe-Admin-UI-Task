import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import MenuBar from "./MenuBar";

const Leftbar = () => {
  const [leftbar, setLeftbar] = useState(true);
  const dashboards = [
    {
      icon: "https://dashboard-ui-x.vercel.app/images/inbox.svg",
      name: "Inbox",
      count: 4,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/drive_folder_upload.svg",
      name: "Drive Files",
      count: 435,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/dashboard_customize.svg",
      name: "Boards",
      count: 5,
    },
    {
      name: "Updates",
      count: 0,
      icon: "https://dashboard-ui-x.vercel.app/images/access_time.svg  ",
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/data_usage.svg",
      name: "Analytics",
      count: 2,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/space_dashboard.svg",
      name: "CRM Dashboard",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/sell.svg",
      name: "Ecommerce",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/payment.svg",
      name: "Cryptocurrency",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/lock_clock.svg",
      name: "Projects",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/image_search.svg",
      name: "NFT Marketplace",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tune.svg",
      name: "Settings",
      count: 2,
    },
  ];
  const projects = [
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tag.svg",
      name: "Additional Calendar",
      count: 6,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tag.svg",
      name: "Branch Logo Design",
      count: 11,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tag.svg",
      name: "User Research",
      count: 0,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tag.svg",
      name: "Marketing Sales",
      count: 23,
    },
    {
      icon: "https://dashboard-ui-x.vercel.app/images/tag.svg",
      name: "New Project Template",
      count: 2,
    },
  ];
  return (
    <>
      <div className="overflow-y-scroll border-r-[1px] border-[#E9EBF0]">
        <div className={`flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px] w-full`}>
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <img
            src="https://dashboard-ui-x.vercel.app/images/menu_open.svg"
            onClick={() => setLeftbar(!leftbar)}
            className="cursor-pointer"
            width="20"
            decoding="async"
            height="20"
            alt="logo"
          />
        </div>
        <div className="px-[32px] hidden lg:block w-72">
          <div className="flex items-center justify-between py-[30px] border-b-[1px] border-[#E9EBF0]">
            <div className="flex gap-4 items-center">
              <Avatar url="https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className='text-[#1F2633] font-semibold text-[12px]"'>
                Nancy Martino
              </p>
              <p className="text-[#B8BFCC] font-semibold text-[11px]">
                Designer
              </p>
            </div>
            <img
              src="https://dashboard-ui-x.vercel.app/images/unfold_more.svg"
              style={{ color: "transparent" }}
              height="20"
              loading="lazy"
              className="cursor-pointer"
              width="20"
              alt="logo"
            />
          </div>
        </div>
        <div
          className={
            !leftbar
              ? `absolute lg:static w-72 flex flex-col z-10
        opacity-0 delay-0 duration-500
        lg:w-full lg:visible lg:opacity-100 transition-all pb-[30px] px-[32px] bg-[#F7F8FA]`
              : `absolute lg:static w-full flex flex-col z-10
        flex-1 opacity-100
        lg:w-72 lg:visible lg:opacity-100 transition-all pb-[30px] px-[32px] bg-[#F7F8FA]`
          }
        >
          <MenuBar menus={dashboards} name={"DASHBOARDS"} />
          <MenuBar menus={projects} name={"PROJECTS"} />
        </div>
      </div>
    </>
  );
};

export default Leftbar;
