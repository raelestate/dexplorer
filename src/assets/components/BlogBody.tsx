import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the type for a blog post
interface BlogPost {
    id: number;
    title: string;
    summary: string;
    image: string; // Add image property
}

const Blogs: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        // Mock API data
        setPosts([
            { id: 1, title: "Getting Started with React", summary: "A beginner’s guide to React.js and its core concepts.", image: "/images/img4.jpg" },
            { id: 2, title: "Understanding useState Hook", summary: "How to manage state in functional components using useState.", image: "/images/img4.jpg" },
            { id: 3, title: "React Router Explained", summary: "Learn how to navigate between pages in a React app.", image: "/images/img4.jpg" },
        ]);
    }, []);

    return <BlogBody posts={posts} />;
};

const BlogBody: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
    return (
        <section id="blog_section">
            <div className="container">
                <div className="blog_info">
                    <h2>Blog Posts</h2>
                    <div className="blog_contents">
                        {posts.map((post) => (
                            <div key={post.id} className="blog_card">
                                <img src={post.image} alt={post.title} /> {/* Display the image */}
                                <h2>{post.title}</h2>
                                <p>{post.summary}</p>
                                <Link to={`/blogs/${post.id}`} >Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;