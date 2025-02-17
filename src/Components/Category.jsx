// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Category.css";

const categories = ["Category name", "Category name", "Category name", "Category name", "Category name"];

const Category = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Data from API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.slice(16, 22)); // Fetch only 6 posts
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="container category-layout">
            {/* Categories Section */}
            <div className="categories">
                {categories.map((category, index) => (
                    <span key={index} className="category-item">{category}</span>
                ))}
            </div>

            {/* Main Layout - Featured Post & Side Section */}
            <div className="row">
                {/* Left: Featured Post */}
                <div className="col-lg-6 col-md-12">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="featured-post">
                            <img
                                src={`https://images.unsplash.com/photo-1738522477288-82f5db85cfc3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${posts[0]?.id}`}
                                alt="Featured"
                                className="featured-image"
                            />
                            <p className="date">1 Month Ago</p>
                            <h3 className="title">{posts[0]?.title}</h3>
                            <p className="description">{posts[0]?.body}</p>
                            <a href="#" className="view-post">View Post</a>
                        </div>
                    )}
                </div>

                {/* Right: Side Section */}
                <div className="col-lg-3 col-md-12">
                    <div className="side-section">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            posts.slice(1, 4).map((post) => (
                                <div key={post.id} className="side-post">
                                    <img
                                        src={`https://images.unsplash.com/photo-1739546103938-b30b9b1c828d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D${post.id}`}
                                        alt="Side Post"
                                        className="side-image"
                                    />
                                    <div>
                                        <h5>{post.title}</h5>
                                        <p className="date">21 March 2021</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Rightmost: Manga Reads */}
                <div className="col-lg-3 col-md-12 manga-reads-container">
                    <h4>Manga Reads</h4>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        posts.slice(4, 6).map((post) => (
                            <div key={post.id} className="manga-item">
                                <img
                                    src={`https://images.unsplash.com/photo-1597348989645-46b190ce4918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzODh8fHxlbnwwfHx8fHw%3D${post.id}`}
                                    alt="Manga"
                                    className="manga-image"
                                />
                                <div>
                                    <h5>{post.title}</h5>
                                    <p className="date">21 March 2021</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Category;
