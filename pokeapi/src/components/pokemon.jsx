import { useEffect, useState } from 'react';
import '../styles/pokemon.css';
import axios from 'axios';

const Pokemon = ({ inputValue }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (inputValue) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
                        params: { query: inputValue },
                        headers: {
                            Authorization: `Client-ID 6q3I1OOh4EBu0BbKpeRpcuZUSqHJ9o8lxHujCbGKxiA`
                        }
                    });
                    setImageUrl(response.data.urls.regular);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [inputValue]);

    return (
        <section className="">
            {imageUrl ? (
                <img className='img-fluid' src={imageUrl} alt={inputValue} />
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Pokemon;