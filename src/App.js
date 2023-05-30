import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from "./Hero";
import ProjectWebsites from './ProjectWebsites';
import ProjectMobiles from './ProjectMobiles';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Hero} />
        </Routes>
        <Routes>
          <Route path='/project/websites' exact Component={ProjectWebsites} />
        </Routes>
        <Routes>
          <Route path='/project/mobiles' exact Component={ProjectMobiles} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
