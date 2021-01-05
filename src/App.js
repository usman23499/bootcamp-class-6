import './App.css';
import Traker from './Traker'
import { Transictionprovider } from "./contex";
function App() {
  return (
    

      <Transictionprovider>

      <Traker /> 
      </Transictionprovider>
    
  );
}

export default App;
