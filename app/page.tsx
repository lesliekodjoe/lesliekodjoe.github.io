"use client"
import React from "react";
import Footer from "@/components/Footer";
import Hero from "@/sections/landing/Hero";
import Project from "@/sections/landing/Project";
import Connect from "@/sections/Connect";

export default function Home() {
  return (
    <section className="">
      <Hero/>
      <Project/>
      <Connect />
      <Footer />
    </section>
  );
}
