
import './App.css';
import {useEfffect} from 'react';

function App() {


  const dictonaryApi = async () => {

    try {

      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/<word>`)

    }

    catch(error){
      console.log(error)
    }
  }


  useEfffect(() =>{


  },[])



  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
