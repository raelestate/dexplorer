import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

// Define a type for the blog data
interface BlogData {
    [key: number]: { title: string; content: string; image: string };
}

// Mock blog data
const blogData: BlogData = {
    1: { title: "Getting Started with React", content: "React is a JavaScript library for building user interfaces...", image: "/images/img2.jpg" },
    2: { title: "Understanding useState Hook", content: "The useState hook lets you add state to function components...", image: "/images/img2.jpg" },
    3: { title: "React Router Explained", content: "React Router is a powerful library for managing navigation in React...", image: "/images/img2.jpg" },
};
const heroSection ={
    brand: "Blog", 
    smallText: "Let's talk About", 
    description: "All About Me"
  };

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get blog ID from URL
    const post = blogData[Number(id)];

    if (!post) return <h2 className="no_post">Post Not Found</h2>;

    return (
        <>
            <HeroSection brand={heroSection.brand} smallText={heroSection.smallText} description={post.title} />
            <Navbar />
            <section id="blog_detail_section">
                <div className="container">
                    <div className="blog_detail_info">
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                        <Link to="/blogs">Back to Blogs</Link>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
};

export default BlogDetail;
