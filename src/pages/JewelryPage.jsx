import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

const JewelryPage = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJewelry = async () => {
            try {
                const response = await api.get('/seller/categories/jewelry/products');
                setWatches(response.data);
            } catch (err) {
                setError('Failed to load jewelry. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchJewelry();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">All Collections</h1>
            {loading ? (
                <p className="text-center text-gray-500">Loading watches...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : watches.length === 0 ? (
                <p className="text-center text-gray-500">No watches available at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {watches.map((watch) => (
                        <div key={watch.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg">
                            <Link to={`/products/${watch.id}`}>
                                <img
                                    src={watch.image}
                                    alt={watch.name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <h2 className="text-xl font-semibold mt-4">{watch.name}</h2>
                                <p className="text-gray-700 mt-2">${watch.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JewelryPage;
