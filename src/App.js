import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import SideBar from './components/SideBar';
import './Nullstyle.css';

const App = ()=> {
    return (
      <div className="wrapper">
        <Header/>
        <div className='shellMainSide'>
          <SideBar/>
          <Profile/>
        </div>
      </div>
    );
}
export default App;