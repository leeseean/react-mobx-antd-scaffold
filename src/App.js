import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <div className="App">
                        <Home/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
