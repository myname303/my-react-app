import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, thumbnail, name, description, comics }) {
    return (
        <div>
            <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                style={{width: '100px', height: '120px'}}
            />
            <h2>
                <Link to={`/movie/${id}`}>{name}</Link>
            </h2>
            <p>{description || "No description available."}</p>
            <h3>Comics:</h3>
            <ul>
                {comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    comics: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Movie;
