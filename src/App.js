import './App.css';

import routes from './config/routes';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
