import React, { useState, useEffect } from "react";
import "./Cardone.css";
import { FaRegUserCircle, FaRegShareSquare } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoImageOutline } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [blogImages, setBlogImages] = useState([

        "https://images.unsplash.com/photo-1739370327561-87820ea0dd33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739378975928-33e610daf0dd?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739433438331-e50bb5467531?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739382122846-74e722a6eea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739382445469-9b86a88a2fb2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739056656233-8d6155a81e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1739369459364-69b059575201?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1738330858763-9c0f2df3a031?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1737467034151-16e643c905c7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data.slice(0, 9)); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const sectionImages = {
        hero: "https://images.unsplash.com/photo-1739772542563-b592f172282f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        topDestinations: "https://via.placeholder.com/600x200/28a745/FFFFFF?text=Top+Destinations", 
        contentGridLeft: "https://images.unsplash.com/photo-1739382122868-841cb1e669df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentGridMiddle: "https://images.unsplash.com/photo-1739737991332-557aa4da4f4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentGridRight: "https://images.unsplash.com/photo-1739531722390-04a6942231e2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    };

    const destinationImages = [
        { src: "https://images.unsplash.com/photo-1739705690223-0219a1f06a14?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Dominican Republic" },  
        { src: "https://plus.unsplash.com/premium_photo-1738779002040-6df7c80c6ef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Maecenas Tincidunt" }, 
        { src: "https://images.unsplash.com/photo-1736332654737-1224ed263915?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Dominican Republic" },  
        { src: "https://images.unsplash.com/photo-1739486549895-c1e03729a253?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Dominican Republic" }, 
        { src: "https://images.unsplash.com/photo-1739560116869-84714fa15b3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Dominican Republic" }, 
    ];


    return (
        <div className="container">
            {loading && <p className="text-center">Loading posts...</p>}

            <div className="row">
                {posts.map((post, index) => (
                    <div key={post.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="blog-card">
                            <div className="image-container">
                                <img
                                    src={blogImages[index % blogImages.length]}
                                    alt={`Post ${post.id}`}
                                    className="blog-image"
                                />
                                <div className="overlay-tags">
                                    <span className="tag">Category</span>
                                    <IoImageOutline className="image" />
                                </div>
                            </div>

                            <h3 className="blog-title">{post.title}</h3>
                            <div className="blog-meta">
                                <FaRegUserCircle className="icon" />
                                <span className="author">John Doe</span>
                                <GoDotFill className="dot" />
                                <span className="date">July 18, 2018</span>
                                <FaRegShareSquare className="icon ms-3" />
                                <span className="shares">1K shares</span>
                            </div>

                            <p className="blog-description">{post.body.slice(0, 100)}...</p>
                            <a href="#" className="view-post">View Post</a>
                        </div>
                    </div>
                ))}
            </div>
            <button className="panning-btn">Load More</button>
            <div className="hero-section mt-4">
                <div className="hero-image" style={{ backgroundImage: `url(${sectionImages.hero})` }}>
                    <div className="hero-content">
                        <button className="btn">Travel</button>
                        <h1 className="text-white">Richird Norton photorealistic rendering as real photos</h1>
                        <p className="text-white">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
                        <button className="btn-planning ">Start planning your trip</button>
                    </div>
                </div>
            </div>

            {/* Top */}

            <div className="destination mt-5">
                <h2>Top Destinations</h2>
                <p>Tick one more destination off of your bucket list with one of our most popular vacations in 2022</p>
                <div className="row">
                    {destinationImages.map((destination, index) => (
                        <div className="col-md-auto mb-3" key={index}>
                            <div className="destination-card">
                                <img src={destination.src} alt={destination.alt} className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Category */}

            <div className="mt-5 category-container">
                <div className="row">
                    {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'].map((category, index) => (
                        <div className="col-6 col-md-2" key={index}>
                            {index === 0 ? <span className="underlined">{category}</span> : category}
                        </div>
                    ))}
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12 col-md-4">
                    {posts.length > 0 ? (
                        <div className="card mb-4">
                            <img src={sectionImages.contentGridLeft} className="card-img-top" alt="Road" />
                            <div className="card-body">
                                <small className="text-muted">1 Month Ago</small>
                                <h5 className="card-title">{posts[0].title}</h5>
                                <p className="card-text">{posts[0].body}</p>
                                <a href="#" className="btn btn-link">View Post</a>
                            </div>
                        </div>
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </div>

                {/* Middle */}
                <div className="col-12 col-md-4">
                    {[
                        { title: 'Akame Ga Kill! Season Finale', image: 'FA8072' },
                        { title: 'Naruto Uzumaki Hidden Village', image: '778899' },
                        { title: 'Love Juice Season Priemere', image: '90EE90' },
                        { title: 'Love Juice Season Priemere', image: '90EE90' },
                    ].map((item, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="row no-gutters">
                                <div className="col-4">
                                    <img src={sectionImages.contentGridMiddle} className="card-img" alt={item.title} />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <small className="text-muted">21 March 2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right  */}
                <div className="col-12 col-md-4">
                    <h6>Manga reads</h6>
                    {[
                        { title: 'Akame Ga Kill! Season Finale', image: 'FA8072' },
                        { title: 'Naruto Uzumaki Hidden Village', image: '778899' },
                        { title: 'Love Juice Season Priemere', image: '90EE90' },
                        { title: 'Love Juice Season Priemere', image: '90EE90' },
                    ].map((item, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="row no-gutters">
                                <div className="col-4">
                                    <img src={sectionImages.contentGridMiddle} className="card-img" alt={item.title} />
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <small className="text-muted">21 March 2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BlogCard;