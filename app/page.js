"use client";
import Navbar from "../app/components/Navbar";
import Sidebar from "../app/components/Sidebar";
import Skilltest from "../app/components/Skilltest";
import Image from "next/image";
import { useState } from "react";
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js";
<link
  rel='stylesheet'
  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
  integrity='sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=='
  crossorigin='anonymous'
  referrerpolicy='no-referrer'
/>;

Chart.register(CategoryScale);

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <div>Dashboard Component</div>;
      case "SkillTest":
        return <Skilltest />;
      case "Internship":
        return <div>Internship Component</div>;
      default:
        return <div>Internship Component</div>;
    }
  };

  return (
    <>
        <Navbar />
        <div className='flex md:flex-wrap'>
          <Sidebar setActiveComponent={setActiveComponent} />
          <main className='flex-1 p-4'>{renderComponent()}</main>
        </div>
    </>
  );
}
