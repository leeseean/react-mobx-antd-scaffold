import React from 'react';
import {Provider} from 'mobx-react';
import stores from './stores/index';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import GlobalHead from './components/globalHead';
import GlobalFoot from './components/globalFoot';

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <div className="App">
                        <GlobalHead/>
                        <Home/>
                        <GlobalFoot/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
