import './App.css';

import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
