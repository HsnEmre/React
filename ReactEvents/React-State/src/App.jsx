import { sculptureList } from './data.js';
//#region 
/*
--State nedir ?
  *state componentin hafızasıdır
  *state güncellendiğinde component tekrar render edilir
  *local değişkenleri korur



--State Yöntemleri
  *useState() => Hooks
  *UseReducer()
  *ContextAPI
  *React Redux
  *-use ile başlayan metotlar

*/
//#endregion



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