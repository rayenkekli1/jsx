import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './componets/profile/ProfilePhoto';
import FullName from './componets/profile/FullName';
import Address from './componets/profile/Address';
import Gmail from './componets/profile/Gmail';


function App() {
  return (
    <div className="App">
      <div className='block'>  
        <ProfilePhoto />
        <FullName />
        <Address />
        <Gmail />
      </div>
    
    </div>
  );
}

export default App;
