import { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(() => {
    const getPunks = async () => {
      await axios.get('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x1469AF750a1D617173A214111D116065a9C72b81&order_direction=asc').then((res) => setPunkListData(res.data.assets))
    }
    getPunks()
  }, [])
  return (
    <div className="app">
      <Header />
      {punkListData && punkListData.length > 0 && (
        <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
