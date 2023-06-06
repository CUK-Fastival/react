import './Artist.css';

const Artist = () => {
    return (
        <div className="artist-container">
            <h1>
                Genre
            </h1>

            <ul>
                <li>
                    <a href="/rap">랩/힙합</a>
                </li>
                <li>
                    <a href="#">R&B/Soul</a>
                </li>
                <li>
                    <a href="#">인디음악</a>
                </li>
                <li>
                    <a href="#">록/메탈</a>
                </li>
            </ul>

            <div className="artist-line">
                01 <hr></hr> ARTIST
            </div>
        </div>
    )
}

export default Artist;