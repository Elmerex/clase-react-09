import logo from './logo.svg';
import './App.css';
import Banner from'./component/Banner.js'
import Navbar from './component/Navbar'
import Button from './component/Button'
import Video from './component/Video'
import Imagen from './component/imagen';

function App() {
  return (

    <div className="App">
      <Navbar />

      <div>
        <Video />
      </div>


      
      <Button />

      <Imagen />
      

      
    </div>

  );
}

export default App;
