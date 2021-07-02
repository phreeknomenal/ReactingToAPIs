import React from 'react';
import { useEffect, useState } from 'react';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(results => results.json())
            .then(allFilms => setFilms(allFilms));
    }, []);

    return (
        <main className="container">
            <section className="row row-cols-1 mt-5">
                {films.map(film => (
                    <div className="col" key={film.id}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h3 className="card-title text-info">
                                    {film.title}
                                </h3>
                                <h6 className="card-title">
                                    ({film.original_title_romanised} / {film.original_title})
                                </h6>
                                <p className="card-subtitle mb-1 text-muted">
                                    by {film.director}
                                </p>
                                <p className="card-text">
                                    {film.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    );
};

export default Films;