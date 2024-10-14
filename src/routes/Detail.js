import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
        const { id } = useParams();
        const [loading, setLoading] = useState(true);
        const [movie, setMovie] = useState({})

        const getMovie = async () => {
                const response = await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`);
                const json = await response.json();
                console.log("Fetched movie data:", json.data.results[0]); // 데이터가 제대로 들어왔는지 확인
                setMovie(json.data.results[0]);
                setLoading(false);
        };

        useEffect(() => {
                getMovie();
        }, [id]);

        useEffect(() => {
                console.log("Updated movie state:", movie); // movie 상태가 변경될 때마다 로그 출력
        }, [movie]);

        return (
            <div>
                    {loading ? (
                        <div>
                                <span>Loading...</span>
                        </div>
                    ) : (
                        movie && (
                            <MovieDetail
                                id={movie.id}
                                thumbnail={movie.thumbnail}
                                name={movie.name}
                                description={movie.description}
                                comics={movie.comics}
                                series={movie.series}
                                stories={movie.stories}
                                events={movie.events}
                                urls={movie.urls}
                            />
                        )
                    )}
            </div>
        );

}

export default Detail;
