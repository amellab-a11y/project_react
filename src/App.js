import logo from './logo.svg';
import './App.css';
import myImageSrc from "./imageInSrc.jpg";
import './style.css';


function App() {
  return (
    <div className='App'>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className='Title Red'>AMEL LABIDI</h1>

<br />

<img src={myImageSrc} alt='image in src' />

<br />

<img src="/imageInPublic.jpg" alt ='image in public' />

</div>

<video style={{width:320,height:240}} controls>

<source src="/videos/myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
