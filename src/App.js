
import './App.css';
import Slider from './pages/Slider';

function App() {
  const images = [
    {url:"/image/image1.jpg"},
    {url:"/image/image2.jpg"},
    {url:"/image/image3.jpg"},
    {url:"/image/image4.jpg"},
    {url:"/image/image5.jpg"}
  ]
  return (
    <div className="main">
      <Slider images={images}/>
    </div>
  );
}

export default App;
