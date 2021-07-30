//import logo from './logo.svg';
import "./App.css";

const styles= {
  backgroundColor: `#e6f2ff`,
  border:  `#4d004d 3px solid`,
  padding:10,
  para:{
    backgroundColor: `#ffffff`
  }
};

  const { v4: uuidv4 } = require('uuid');
  uuidv4();


function App() {
  const { v4: uuidv4 } = require('uuid');
  return (
    <div>
        {uuidv4()}
    </div>
  );
}

export default App;
