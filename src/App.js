import './App.css';
import { Home, Login, Projects, Timesheet } from './pages';
import { Header, Footer } from './components/index';

function App() {
    return (
        <div className='App'>
            <Header></Header>
            <div className='content'>
                <Timesheet></Timesheet>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default App;
