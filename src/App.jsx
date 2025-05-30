import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/projects" element={<h1>Projects</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default App;
