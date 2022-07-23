import { useEffect, useState } from "react";
import { Search } from ".";
import { Gift } from ".";
import '../CSS_Components/Home.css'

const Home = () => {
    const [gifts, setGifts] = useState([]);

    const getGifts = (search) => {
        const API_KEY = "fHTJpFMpIhz1niXJE4zkzPTG8Z6KTx5o";
        const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10`;

        fetch(API_URL)
        .then((response) => response.json())
        .then((responseJson) => setGifts(responseJson.data));
    };

    useEffect(()=> {
        getGifts("hangover");
    },[]);

    return (
        <div>
            <Search getGifts={getGifts} />

            <div className="d-flex flex-wrap">
            {gifts.map((gif) => (
                <Gift
                gifImage ={gif.images.downsized_medium.url}
                title={gif.title}
                gifUrl={gif.url}
                key={gif.id}
                />    
            ))}
            </div>
        </div>
    );
};

export { Home };