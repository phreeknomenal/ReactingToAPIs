import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Films from './components/Films';
import People from './components/People';

const App = () => {
    const [films, setFilms] = useState(false);
    const [people, setPeople] = useState(false);

    const filmsLoaded = () => {
        setFilms(true);
        setPeople(false);
    }

    const peopleLoaded = () => {
        setFilms(false);
        setPeople(true);
    }

    const homeButton = () => {
        setFilms(false);
        setPeople(false);
    }


    if (films && !people) {
        return (
            <div className="container-fluid">
                <Header />
                <div id="box1" className="row text-center">
                    <div className="col">
                        <button onClick={() => setFilms(false)} type="button" className="btn btn-dark">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={peopleLoaded} type="button" className="btn btn-dark">
                            Show People
                        </button>
                    </div>
                </div>
                <Films />
                <div className="row">
                    <div className="col d-flex my-4 justify-content-center">
                        <button onClick={homeButton} type="button" className="btn btn-dark">
                            Back To Main
                        </button>
                    </div>
                </div>
            </div>
        );
    } else if (people && !films) {
        return (
            <div className="container-fluid">
                <Header />
                <div id="box1" className="row text-center">
                    <div className="col">
                        <button onClick={filmsLoaded} type="button" className="btn btn-dark">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={() => setPeople(false)} type="button" className="btn btn-dark">
                            Show People
                        </button>
                    </div>
                </div>
                <People />
                <div className="row">
                    <div className="col d-flex my-4 justify-content-center">
                        <button onClick={homeButton} type="button" className="btn btn-dark">
                            Back To Main
                        </button>
                    </div>
                </div>
            </div>
        );
    } else if (films && people) {
        return (
            <div className="container-fluid">
                <Header />
                <div id="box1" className="row text-center">
                    <div className="col">
                        <button onClick={() => setFilms(true)} type="button" className="btn btn-dark">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={() => setPeople(true)} type="button" className="btn btn-dark">
                            Show People
                        </button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 text-center p-3 shadow border rounded">
                        <h3>
                            Studio Ghibli API
                        </h3>
                        <p>
                            The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense. Navigation can be found on the left sidebar, and the right sidebar shows examples of returned objects for successful calls.
                        </p>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className="container-fluid">
                <Header />
                <div id="box1" className="row text-center">
                    <div className="col">
                        <button onClick={() => setFilms(true)} type="button" className="btn btn-dark">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={() => setPeople(true)} type="button" className="btn btn-dark">
                            Show People
                        </button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 text-center p-3 shadow border rounded">
                        <h3>
                            Studio Ghibli API
                        </h3>
                        <p>
                            The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense. Navigation can be found on the left sidebar, and the right sidebar shows examples of returned objects for successful calls.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;