
import { useEffect, useState } from "react";
import Movies from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
            )
        ).json();
        setMovies(json.data.results);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movies
                            key={movie.id}
                            id={movie.id}
                            thumbnail={ movie.thumbnail}
                            name={ movie.name}
                            description={ movie.description}
                            comics={ movie.comics}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;