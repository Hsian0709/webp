import './App.css';
import CGUlongin from './cgu_longin';
import Password from './password';
import Username from './user_name';
import Longin from './longin';

function App() {
  return (
    <div className="App">
      <div>
        {CGUlongin()}
        <div className='ip'>
        {Username()}
        </div >
        <div className='ip'>
        {Password()}
        </div>
        <div className="btn">
        {Longin()}
        </div>
      </div>
    </div>
  );
}

export default App;
