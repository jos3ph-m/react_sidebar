import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Overview, Users, Revenue } from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team';
import { Messages, MessagesOne, MessagesTwo } from './pages/Messages';
import Futures from './pages/Futures';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/overview/revenue" exact component={Revenue} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/products" exact component={Products} />
        <Route path="/team" exact component={Team} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/messages/messages1" exact component={MessagesOne} />
        <Route path="/messages/messages2" exact component={MessagesTwo} />
        <Route path="/futures" exact component={Futures} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  );
}

export default App;
