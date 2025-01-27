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

    // const [isVisible , setVisible] = useState(false);
    // const onClick = () => setVisible(!isVisible);

    // const [isVisible2 , setVisible2] = useState(false);
    // const onClick2 = () => setVisible2(!isVisible2);

    return (
        <div className='overscroll-none overflow-hidden'>
            <div className=" overscroll-none overflow-hidden gap-4 bg-white text-gray-700 dark:text-white dark:bg-black">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                {/* <div className="flex justify-center items-center transition-all duration-500">
                    <button onClick={onClick} className="absolute z-50 top-3 border-gray-300 dark:border-gray-400 border-2 justify-center items-center align-center text-center text-sm p-3 bg-white/95 dark:bg-black/95 rounded-lg transition-all duration-500">
                        My Projects{isVisible ? <Projects />: null}
                    </button>
                    <button onClick={onClick2} className="absolute z-50 top-3 border-gray-300 dark:border-gray-400 border-2 justify-center items-center align-center text-center translate-x-36 text-sm p-3 bg-white/95 dark:bg-black/95 rounded-lg transition-all duration-500">
                        In-Depth Resume{isVisible2 ? <HomeRight />: null}
                    </button>
                </div> */}
            </div>

{/*             
                <Banner />
 */}

            <div className={`min-h-screen w-full flex flex-col pb-12 sm:flex-row subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}>
            
                <HomeLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                <HomeRight />
                {/* <Projects /> */}
            </div>

            {/* <Projects /> */}

            <Contact />

            <ScrollToTop />

            <div className="overscroll-none overflow-hidden gap-4 bg-white text-gray-700 dark:bg-black">
                <Footer />
            </div>

        </div>
    );
}

export default App;

