import './App.css';
//import Banner from'./component/Banner.js'
import Navbar from './component/Navbar'
//import Button from './component/Button'
import Video from './component/Video'
import Imagen from './component/Imagen'
import Audio from './component/Audio';

function App() {
  return (

    <div className="App">
      <Navbar />


      <h5>Video src remoto</h5>
      <Video />
   
      

      <h5>Foto local</h5>
      <Imagen />
      
      <h5>Audio local</h5>
      <Audio />
      
      
    </div>

  );
}

export default App;
