import React, {useState} from 'react';


import { Navbar } from './components/Navbar';  //We used curly brace becuase export const not export default
import { Footer } from './components/Footer';
import { Rout } from './components/Rout' ;

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return(
     <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Rout />
            <Footer />
        </div>
     </div>   
    );
}

export default App;