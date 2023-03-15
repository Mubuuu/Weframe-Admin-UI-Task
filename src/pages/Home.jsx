import React from "react";
import Leftbar from "../components/leftBar/Leftbar";
import Navbar from "../components/navbar/Navbar";
import Rightbar from "../components/rightBar/Rightbar";
import Section from "../components/section/Section";
import TaskboardHeader from "../components/taskboard/TaskboardHeader";
import { Backlog,Done,Inprogress,ToDo } from "../cardContent";

const Home = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row bg-[#F7F8FA] min-h-screen"'>
      <Leftbar />
      <div className='flex-1 false lg:block ' style={{transform: "translateX(0vw) translateZ(0px)"}}>
         <Navbar/>
         <TaskboardHeader />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[16px] md:px-[36px] pb-[28px] gap-[24px]'>
            <Section tasks={Backlog} title={"Backlog Tasks"} />
            <Section tasks={ToDo} title={"To Do Tasks"} />
            <Section tasks={Inprogress} title={"In Progress"} />
            <Section tasks={Done} title={"Done"} />
          </div>
      </div> 
     <Rightbar/>
    </div>
    </>
  );
};

export default Home;
