import React from 'react';
import { useEffect, useState } from 'react';

const Films = () => {
    const [peoples, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople));
    }, []);

    return (
        <main className="container">
            <section className="row row-cols-2 mt-5">
                {peoples.map(people => (
                    <div className="col" key={people.id}>
                        <div className="card shadow my-3">
                            <div className="card-body">
                                <h4 className="card-title mb-2 text-info">
                                    {people.name}
                                </h4>
                                <p className="card-subtitle mb-1 text-muted">
                                    <span className="test">Age: </span>{people.age}
                                </p>
                                <p className="card-subtitle mb-1 text-muted">
                                    <span className="test">Gender: </span>{people.gender}
                                </p>
                                <a href={people.url} className="btn btn-secondary my-2" target="_blank" rel="noreferrer">See JSON</a>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </main>
    );
};

export default Films;