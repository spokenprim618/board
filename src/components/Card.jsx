import React, { useEffect, useState } from 'react';
const Card = ({ length }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://the-mexican-food-db.p.rapidapi.com/';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '5caea9369bmshf3ba5b6271fdb89p12cfdcjsn7cb7429fc312',
                    'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result.slice(0, length)); // Set fetched data to state, limited by length
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [length]);

    // Function to render image if available
    const renderImage = (imageUrl) => {
        if (imageUrl) {
            return (
                <img
                    src={imageUrl || 'https://via.placeholder.com/150'} // Placeholder image URL
                    className="card-img-top"
                    alt={imageUrl ? 'Fetched Data' : 'No Image Found'}
                />
            );
        }
    };

    // HTML for a basic card with dynamic content
    return (
        <div className="container">
            <div className="row">
                {data.map((item) => (
                    
                        <div className="card">
                            {renderImage(item.image)}
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.difficulty}</p>
                            </div>
                        </div>
                  
                ))}
            </div>
        </div>
    );
};

export default Card;
