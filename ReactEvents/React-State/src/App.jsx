import { useState } from 'react';
import { sculptureList } from './data.js';

function App() {

  // State tanımlaması
  const [index, setIndex] = useState(0);
  const [showMore,setShowMore]=useState(false);

  // "ileri" fonksiyonu
  function ileri() {
    if (index < sculptureList.length - 1) {     
      setIndex(index + 1); // Index'i artır
    }
    else{
      setIndex(0);
    }
  }

  // "geri" fonksiyonu
  function geri() {
    if (index > 0) {
      setIndex(index - 1); // Index'i azalt
    }
    else{
      setIndex(sculptureList.length-1);
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore);
  }


  // sculpture veri bağlantısı
  const sculpture = sculptureList[index];

  return (
    <>
      <button onClick={ileri}>İleri</button>
      <button onClick={geri}>Geri</button>

      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleMoreClick}>show details</button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default App;
