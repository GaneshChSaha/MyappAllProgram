
import './App.css';
import { Componentx } from './Componentx';
import Firstapp from './Firstapp';
import { Footer } from './Header/Footer';
import { Menu } from './Header/Menu';
import Secondapp from './Secondapp';
import {Dashboard} from './Header/Dashboard';
import ComponentY from './ComponentY';
import { Tweet } from './Tweet';
import Calculator from './component/calc/Calculator';
import GreetUserOne from './GreetUserOne';
import SimpleCalc from './SimpleCalc';
import SimpleCalctwo from './SimpleCalctwo';
import StylingDemo from './StylingDemo';
import {Compo} from './Compo';
import Example from './Hook/Example';
import GreetUser from './Hook/GreetUser';
function App() {
  return (
    <div className="reactdemo">
      <h1>Welcome to my React App</h1>
      <Compo/>
      <br/>
      <GreetUser/>
      <br/>
      <Example/>
      <br/>
      <SimpleCalc/>
      <br/>
      <SimpleCalctwo/>
      <br/>
      <StylingDemo/>
      <Calculator/>
      <Componentx/>
      <GreetUserOne/>
      <Firstapp/>
      <Secondapp/>
      <Footer/>
      <Dashboard/>
      <Menu/>
      <ComponentY/>
      <Tweet name="Vivan" handler="@vivan" message="rcb vs mi"/><br/>
      <Tweet name="Vinay" handler="@vinay" message="rcb vs mi"/><br/>
      <Tweet name="Ganesh" handler="@ganesh" message="csk vs mi"/><br/>
      <Tweet name="Sana" handler="@sana" message="kkr vs mi"/><br/>
    </div>
  );
}

export default App;
