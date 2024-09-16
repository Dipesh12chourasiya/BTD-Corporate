import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './components/Header';
import AppHero from './components/hero';
import SocialMedia from './components/SocialMedia';
import AppFooter from './components/footer';
import AppClient from './components/clients';
import BlackTieEvents from './components/BlackTieEvents';
import BlackTieInvitations from './components/BlackTieInvitations';

function App() //

  return (
    <div className='App'>
      <BrowserRouter>
        <header id='header'>
          <AppHeader />
        </header>
      <Routes>
        <Route path="/" element={<AppHero />}>
        </Route>
        <Route path='/social-media-marketing' element={<SocialMedia />} />
        <Route path='/clients' element={<AppClient />} />
        <Route path='/black-tie-events' element={<BlackTieEvents />} />
        <Route path='/black-tie-invitations' element={<BlackTieInvitations />} />
      </Routes>
      <footer id='footer'>
        <AppFooter />
      </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;


// https://www.lahotioverseas.com/
// https://github.com/bibeva/React-Bootstrap-Project-Corporate/blob/master/src/components/hero.js