import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
      </Switch>
    </Router>
  );
}

export default App;
