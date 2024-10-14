import PropTypes from "prop-types";

function MovieDetail({ id, thumbnail, name, description, comics, series, stories, events, urls }) {
    return (
        <div className="detail-container">
            {/* 캐릭터 이미지 */}
            <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                className="character-image"
            />

            {/* 캐릭터 이름 */}
            <h1 className="character-name">{name}</h1>

            {/* 캐릭터 설명 */}
            <p className="character-description">
                {description || "No description available."}
            </p>

            {/* 코믹스 섹션 */}
            <h3>Comics</h3>
            <ul className="comics-list">
                {comics.items.map((comic, index) => (
                    <li key={index}>{comic.name}</li>
                ))}
            </ul>

            {/* 시리즈 섹션 */}
            <h3>Series</h3>
            <ul className="series-list">
                {series.items.map((serie, index) => (
                    <li key={index}>{serie.name}</li>
                ))}
            </ul>

            {/* 스토리 섹션 */}
            <h3>Stories</h3>
            <ul className="stories-list">
                {stories.items.map((story, index) => (
                    <li key={index}>
                        {story.name} - {story.type}
                    </li>
                ))}
            </ul>

            {/* 이벤트 섹션 */}
            <h3>Events</h3>
            <ul className="events-list">
                {events.items.length > 0 ? (
                    events.items.map((event, index) => (
                        <li key={index}>{event.name}</li>
                    ))
                ) : (
                    <li>No events available</li>
                )}
            </ul>

            {/* 외부 링크 섹션 */}
            <h3>External Links</h3>
            <ul className="urls-list">
                {urls.map((url, index) => (
                    <li key={index}>
                        <a href={url.url} target="_blank" rel="noopener noreferrer">
                            {url.type}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

MovieDetail.propTypes = {
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
    series: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    stories: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    events: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
    urls: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MovieDetail;
