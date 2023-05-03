import './App.css';
import Sitebar from './compontes/Sitebar/Siterbar'
import { DataContextProvider } from './Contex/Contex';
import Chat from './compontes/Chat/Chat'
import Nav from './compontes/Navbar/Nav'
function App() {
  return (
    <DataContextProvider>
      <Nav />
      <div className='row gx-0'>
        <div className='col-3 '>
          <Sitebar />
        </div>
        <div className='col-9 '>
          <Chat />
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
