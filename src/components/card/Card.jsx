import React from "react";
import UserAvatar from "../userAvatar/UserAvatar";

const Card = ({ task,title }) => {
  return (
    <div className="flex flex-col gap-4" style={{ opacity: 1 }}>
      <div
        className="flex flex-col gap-3 bg-white p-[20px] rounded-lg drop-shadow-sm"
        style={{ ransform: "translateY(0vw) translateZ(0px)" }}
      >
        <div className="flex justify-between items-start gap-2">
          <p className="text-[12px] font-medium text-[#1F2633]">
            {task?.title}
          </p>
          <div className="flex items-center gap-2 w-12 justify-end">
            <img
              src="https://dashboard-ui-x.vercel.app/images/task-1.svg"
              width="20"
              height="20"
              class="cursor-pointer"
              loading="lazy"
              style={{ color: "transparent" }}
              alt="icon"
            />
            <p className="text-[#33BFFF] text-[10px] font-bold">
              {task?.filecount}
            </p>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-[8px] font-bold px-[8px] py-[5px] rounded-full border-[1px] border-[#EBEEF2]">
            {task?.uid}
          </p>
          {task?.type && (
            <p className="text-[8px] font-bold px-[8px] py-[5px] rounded-full text-[#2563EB] bg-[#2563EB] bg-opacity-10">
              {task?.type}
            </p>
          )}
          <p className={`text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 ${title==="Backlog Tasks"?"bg-[#CA8A04] text-[#CA8A04]":title==="To Do Tasks"?"bg-[#DB2777] text-[#DB2777]":title==="In Progress"?"bg-[#9333EA] text-[#9333EA]":"bg-[#16A34A] text-[#16A34A]"}`}>
            {task?.status}
          </p>
        </div>
        <div className="flex justify-between items-center">
          {task?.image.length > 0 && (
            <UserAvatar count={2} users={task.image} />
          )}
          <div className="flex items-center gap-1.5">
            <img
              src="https://dashboard-ui-x.vercel.app/images/file_present.svg"
              width="20"
              height="20"
              class="cursor-pointer"
              loading="lazy"
              style={{ color: "transparent" }}
              alt="icon"
            />
            <p className="text-[#33BFFF] text-[10px] font-bold">
              {task?.attachcount}
            </p>
            <img
              src="https://dashboard-ui-x.vercel.app/images/message.svg"
              width="20"
              height="20"
              class="cursor-pointer"
              loading="lazy"
              style={{ color: "transparent" }}
              alt="icon"
            />
            <p className="text-[#33BFFF] text-[10px] font-bold">
              {task?.messagecount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
