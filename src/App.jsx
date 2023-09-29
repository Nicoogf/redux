import './App.css' ;
import store from './store' ;
import { Provider } from 'react-redux' ;

function App() {


  return (
    
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit</h1>
        {/* Contador */}
      </div>
     

      {/*CONTADOR  */}
    </Provider>
  )
}

export default App
