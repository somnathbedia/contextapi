
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Weather forecast</h1>
      <Input /><Button value="search" />
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
