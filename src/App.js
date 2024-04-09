import './App.css';
import {useState} from 'react';
import GenerateDataButton from './GenerateDataButton.js';
import InscriptionsTable from './InscriptionsTable.js';

function App() {
  const [entries, addEntry] = useState([]);
  const generateData = () => {
    fetch ("http://localhost:3001/datos")
    .then(response => response.json())  
    .then(data => 
      addEntry(data)
    )
  }

  return (
    <div className="App">
        <div id="header" className="grid grid-cols-12 p-5 text-xl space-y-4 sm:space-y-0">
          <a href="../index.html" className="text-center col-span-12 sm:col-span-2 bg-blue-200 rounded-lg">Volver</a>
          <h1 className="text-center col-span-12 sm:col-span-10">Listado inscripciones a examenes</h1>
      </div>
      <InscriptionsTable entries={entries}/>
      <GenerateDataButton handleClick={generateData}/>
    </div>
  );
}

export default App;
