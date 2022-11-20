import './App.css';
import VoyageProgress from './components/voyageProgress';

function App() {
  const portOfLoading = "Madrid";
  const portOfDischarge = "Denmark";
  const departureTime = "2022-11-20T18:00:12Z";
  const arrivalTime = "2022-11-20T22:00:12Z";
  return (
    <div className="App">
      <p>Dashboard</p>  
      <VoyageProgress portOfLoading = {portOfLoading} 
            portOfDischarge= {portOfDischarge} 
            departureTime= {departureTime}
            arrivalTime={arrivalTime}></VoyageProgress>
    </div>
  );
}

export default App;
