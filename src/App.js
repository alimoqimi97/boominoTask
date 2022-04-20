import Navbar from './components/navbar/Navbar';
import Videos from './components/videos/Videos';
import Modal from './components/Modal/Modal';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const showModal = useSelector((state) => state.modal.isModalOpen)

  return (
    <div className="App">
      <Navbar />
      <Videos />
      {
        showModal ?
          <div className='modal-container'>
            <Modal />
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
