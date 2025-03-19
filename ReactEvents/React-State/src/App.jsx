import { sculptureList } from './data.js';




function App(){

  //#region  Değişkenler
    let index=3;
    let sculpture=sculptureList[index];

  //#endregion


function ileri(){
  index=index+1;
}

function geri(e){
  console.log(e);
}


return(

<>
<button onClick={ileri}>İleri</button>
<button onClick={geri}>Geri</button>

<h2>

  <i>{sculpture.name}</i> by {sculpture.artist}
</h2>
<h3>
  ({index+1} of {sculptureList.length})
</h3>
<img src={sculpture.url} alt={sculpture.alt} />
<p>{sculpture.description}</p>

</>

)







}


export default App