import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Films from './components/Films';
import People from './components/People';

const App = () => {
    const [films, setFilms] = useState(false);
    const [people, setPeople] = useState(false);  

    if (films) {
        return (
            <div className="container-fluid">
                <Header />
                <Films/>
            </div>
        );
    } else if (people) {
        return (
            <div className="container-fluid">
                <Header />
                <People/>
            </div>
        );
    } else {
        return (            
            <div className="container-fluid">
                <Header />
                <div id="box1" className="row text-center">
                    <div className="col">
                        <button onClick={() => setFilms(true)} type="button" className="btn btn-primary">
                            Show Films
                        </button>
                    </div>
                    <div className="col justify-content-center">
                        <button onClick={() => setPeople(true)} type="button" className="btn btn-primary">
                            Show People
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;