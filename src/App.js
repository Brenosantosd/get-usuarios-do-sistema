import React , {useState , useEffect} from "react";
import "./App.css"

// Objetivo: Criar um diretório de colaboradores ou usuários que consome uma API pública de pessoas, exibindo o nome completo, a foto de perfil, o e-mail e a cidade em cards limpos e estilizados.

// url API: "https://randomuser.me/api/?results=10"

function App(){

  const [usuarios , setUsuarios] = useState([])

 useEffect(()=> {

  function loadApi(){

   let url = "https://randomuser.me/api/?results=10"
     
    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
      console.log(json.results)
      setUsuarios(json.results)
    })
   
    .catch((error)=>{
       console.log("Não foi possível carregar a API")
    })
  }
   
   loadApi()

 } , [])


  return(
    <div className="container">
      <header>
   
      <h1>Consumindo API</h1>

      <div className="nav">
       <a>Home</a>
       <a>Favoritos</a>
       <a>Sair</a>
         
      </div>
      </header>


       {usuarios.map((item, index)=>{
        return(

             <div key = {item.email || index } className="card">
                 
                  <img src = {item.picture.large}/>
                    <h3>Nome: {item.name.first} {item.name.last}</h3>
                    <p><strong>Email: </strong>{item.email}</p>
                    <p><strong>Cidade:</strong> {item.location.city}</p>

              </div>
  
        )
       })}

    </div>
  )
}


export default App; 