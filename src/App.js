import './App.css';
import JSONDATA from './Data.json'; 
import {useState} from 'react' 

function App() {
  const [searchTerm,setSearchTera] = useState('');

  function handleChange(event){
    return setSearchTera(event.target.value);
  }
  
  function filterKeyWords(){
    
  }

  return (
  
    <div className = "App">
      <input type="text" placeholder='Search bar' onChange={handleChange}/>
      
      {JSONDATA.filter(val =>{
         console.log(val.keywords.filter((x) => x.toLowerCase().includes(searchTerm.toLowerCase())));
        //val.keywords.filter((x) => x.toLowerCase().includes(searchTerm.toLowerCase())).includes(searchTerm.toLocaleLowerCase())
        if(searchTerm == ""){
          return ""; 
        } else if(val.keywords.filter((x) => x.toLowerCase().includes(searchTerm.toLowerCase())) == searchTerm.toLocaleLowerCase()){
          console.log(val);
          return val; 
        }
      }).map((val,key) => {
        return (
        <div className='program' key={key}>
          <p>{val.university_name} {val.title}</p>
        </div>
        )
      })

      
      
      }
    </div>
  );
}

export default App;
