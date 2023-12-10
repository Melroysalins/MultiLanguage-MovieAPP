import { Provider } from 'react-redux';
import './App.css';
import Body from './Component/Body';
import { appstore } from './Component/Appstore';

function App() {
  return (
    <Provider store={appstore}>
    <div className="App">
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
