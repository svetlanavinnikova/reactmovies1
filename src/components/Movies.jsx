import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} /> )
            ) : (
                <div className="not-found">
                    <p className="not-found__text">Sorry, nothing found</p>
                    <div className="not-found__img"></div>
                </div>
            )}
        </div>
    );
}

export { Movies }