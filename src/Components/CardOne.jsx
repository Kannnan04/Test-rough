import  { useState, useEffect } from 'react';
import './Cardone.css';
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoImageOutline } from "react-icons/io5";

const BlogCard = () => {
    const [post, setPost] = useState([]); // Store fetched posts
    const [loading, setLoading] = useState(true); // Show loading state

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPost(data.slice(0, 3)); // Fetch first 6 posts
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    const images = [
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517702669-ebedf5190943?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1429279905410-894d3980828b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    

    return (
        <div className="container">
            {loading ? <p className="text-center">Loading posts...</p> : null}

            <div className="row">
                {post.map((post, index) => (
                    <div key={post.id} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="blog-card">
                            {/* Image Section */}
                            <div className="image-container">
                                <img    
                                    src={images[index]} // Assign unique images
                                    alt="Post Thumbnail"
                                    className="blog-image"
                                />
                                <div className="overlay-tags">
                                    <span className="tag">Aenean Eleifend</span>
                                    <span className="tag">Aliquam</span>
                                    <IoImageOutline className='image' />
                                </div>
                            </div>

                            {/* Blog Content */}
                            <h3 className="blog-title">{post.title}</h3>

                            {/* Author and Date Section */}
                            <div className="blog-meta">
                                <FaRegUserCircle className="icon" />
                                <span className="author">{post.author}Kannan Sivakumar _____ July 18,2018</span>
                                <span className="date">{post.date}</span>
                                <GoDotFill className="dot" />
                                <FaRegShareSquare className="icon ms-3" />
                                <span className="shares">{post.shares}1K shares</span>
                            </div>

                            {/* Blog Description */}
                            <p className="blog-description">{post.body}</p>

                            {/* View Post Link */}
                            <a href="#" className="view-post">View Post</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
