import React from 'react';
import { useEffect, useState } from 'react';
import Films from './components/Films';

const App = () => {
    const [films, setFilms] = useState(false);

    useEffect(() => {
        setFilms();
    }, []);

    if (films) {
        return (
            <div className="container-fluid">
                <Films/>
            </div>
        );
    } else {
        return (
            <div className="container-fluid">
                <div id="box1" className="row">
                    <div className="col">
                        <button onClick={() => setFilms(true)} type="button" className="btn btn-primary">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button type="button" className="btn btn-primary">
                            Show People
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;