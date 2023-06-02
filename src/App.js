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
          <Route path='/websites' exact Component={ProjectWebsites} />
          <Route path='/mobiles' exact Component={ProjectMobiles} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
