// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Destination.css";


const destinations = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1738706195095-fbcc13d32d91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dominican Republic"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1739382120673-54ec4d63dc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        title: "Maecenas Tincidunt"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1739370143123-20f486557a00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dominican Republic"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1739371649407-07ba193bca97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dominican Republic"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1739325755246-0000aca42302?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dominican Republic"
    }
];


const Destination = () => {
    return (
        <div className='container'>
            <div className='Heading'>
                <h1>Top Destinations</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, assumenda molestias? Soluta itaque molestiae quas praesentium, error quis veritatis impedit.</p>
            </div>
            <div className="row">
                {destinations.map((destination) => (
                    <div key={destination.id} className="col-lg-2 col-md-4 col-sm-6">
                        <div className="destination-card">
                            <img src={destination.image} alt={destination.title} className="destination-image" />
                            <div className="overlay">
                                <h3 className="destination-title">{destination.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;