import { useState } from 'react';
import HomeLeft from './components/HomeLeft';
import HomeRight from './components/HomeRight';
import './index.css';
import Footer from './components/Footer';
import { Header } from './components/Header';
import ScrollToTop from './components/ScrollToTop';
// import { Projects } from './components/Projects';
import { Contact } from './components/Contact';


function App() {    
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.documentElement.classList.toggle('dark', !darkMode)
    }



    return (
        <div className='overscroll-none overflow-hidden'>
            <div className=" overscroll-none overflow-hidden gap-4 bg-white text-gray-700 dark:bg-black">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            </div>

{/*             
                <Banner />
 */}

            <div className={`min-h-screen w-full flex flex-col pb-12 sm:flex-row subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}>
                <HomeLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <HomeRight />
            </div>

            {/* <Projects /> */}

            {/* <Contact /> */}

            <ScrollToTop />

            <div className="overscroll-none overflow-hidden gap-4 bg-white text-gray-700 dark:bg-black">
                <Footer />
            </div>

        </div>
    );
}

export default App;

