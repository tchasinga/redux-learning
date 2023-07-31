import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  const title = 'Number of cakes'
  return (
   <Provider store={store}>
     <div className="App">
      <h1>Balolebwami jack</h1>
      <CakeContainer title = {title}/>
    </div>
   </Provider>
  );
}

export default App;
