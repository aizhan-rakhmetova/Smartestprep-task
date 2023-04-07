import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {ProfileInfo} from "./components/NavbarComponents/ProfileInfo/ProfileInfo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/NavbarComponents/Dashboard/Dashboard";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <main className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dashboard'
                               element={<Dashboard/>}/>
                        <Route path={'/profile'}
                               element={<ProfileInfo/>}/>
                        {/*finish to other Navbar components*/}
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
