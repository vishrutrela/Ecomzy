import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const API_URL = "https://fakestoreapi.com/products";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);

        try {
            const result = await fetch(API_URL);
            const data = await result.json();

            setPosts(data);
        } catch (error) {
            console.error('Error in fetching data:', error);
            setError(error);
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : error ? (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            ) : (
                <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))
                    ) : (
                        <div className='flex justify-center items-center'>
                            <p>No posts available.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
