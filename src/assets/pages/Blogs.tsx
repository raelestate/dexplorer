import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import BlogBody from "../components/BlogBody";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
const Blogs: React.FC = () => {
  return (
    <>
    <Loader />
    <div id="content" className="hidden">
      <Navbar />
      <HeroSection brand="Blogs" description="Here's my blog posts." smallText="Welcome to my"/>
      <BlogBody />
      <Footer />
      </div>
    </>
  );
};

export default Blogs;
