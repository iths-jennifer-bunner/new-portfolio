import React, { createRef } from 'react';
import './App.scss';
import Banner from './components/Banner';
import MainComponent from './components/MainComponent';
import About from './components/About';
import Buttons from './components/Buttons';
import { IntersectionObserver } from './components/IntersectionObserver';

function App() {
  // // Scroll down to contact
  const myRef = createRef();
  function handleScrollToElement() {
    window.scrollTo(0, myRef.current.offsetTop);
  }

  return (
    <div>
      <Banner />
      <Buttons handleScrollToElement={handleScrollToElement} />
      <MainComponent />
      <IntersectionObserver>
        <About myRef={myRef} />
      </IntersectionObserver>
    </div>
  );
}

export default App;
