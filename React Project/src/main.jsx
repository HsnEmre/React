import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


function App(){
  return(

    // Fragment

  <> 

    <Header/>
    <ProductList/>
    <Footer/>
  </>);
 
}



function Header(){
  return (<h1>Header</h1>);
}

function ProductList(){
  // const imageUrl="/img/1.jpg";
  // const title ="Ace";
  // const description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fuga!";
  // const price=10000;

const items=
[
  {
    "image":"1.jpg",
  "title":"Ace",
  "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fuga!",
  "price":"10000"
  },
  {
    "image":"2.jpg",
  "title":"Luffy",
  "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fuga!",
  "price":"10000"
  },
  {
    "image":"3.jpg",
  "title":"luffy",
  "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fuga!",
  "price":"10000"
  },
]


const product_item={
  "image":"1.jpg",
  "title":"Ace",
  "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, fuga!",
  "price":"10000"
};

return (
<>
  <h2>Product List</h2>

  {
        items.map((item,index) => (
      <Product
      key={ index }
      image={items[0].image}
      title={items[0].title}
      description={items[0].title}
      price={items[0].price}/>
      ))  

  } 
 
  
  
</>

)


}


function Product(props){
  console.log(props);
  return (

  



  <div>
    <img src={"/img/"+ props.image } alt="" />
    <h2>{ props.title }</h2>
    <p>{props.description}</p>
    {
    /* <img src="/2.jpg" alt="" />
    <h2>luffy</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, exercitationem!</p>
    <img src="/3.jpg" alt="" />
    <h2>luffy2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptate.</p> */}
  </div>
);

}
  

function Footer(){

  const Hour=new Date().getHours();
  console.log(Hour);

  const OpenHour=10;
  const closeHour=20;
  const isopen=Hour >= OpenHour && Hour <= closeHour;
  console.log(isopen);

}

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App/>
  </StrictMode>,
)
