
import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person firstName="Jane" lastName="Doe" age = {45} hairColor="black">
      </Person>
      <Person firstName="John" lastName="Smith" age={88} hairColor="brown">
      </Person>
      <Person firstName="Millard" lastName="Fillmore" age={50} hairColor="brown">
      </Person>
      <Person firstName="Maria" lastName="Smith" age={62} hairColor="silver">
      </Person>
    </div>
  );
}

export default App;
