import './App.css';
import { SocialMedia } from './layout/SocialMedia';
import { MyRoutes } from './router/MyRoutes';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { HeaderNav } from './layout/HeaderNav';

function App() {
  return (
    <Router>
      <HeaderNav/>
        <MyRoutes/>
        <SocialMedia/>
    </Router> 
    
  );
}

export default App;
