"use client"

import CategoriesBar from "@/components/CategoriesBar";
import Crousal from "@/components/Crousal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <div className="homepage">
      <CategoriesBar/>
      <Hero/>
      
    </div>
  );
}
