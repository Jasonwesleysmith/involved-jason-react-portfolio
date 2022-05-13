import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App = () => {
  //javascript here

  return (
    <>
        <Header/>
        <section class="photo-greeting">
            <img src="./images/Me.jpeg" alt="Jason is smiling and being awesome"/>
            <h1>
                <a href="/"><span className="involvedTitle">Involved</span><span className="involvedTitle">Jason</span></a>
            </h1>
        </section>
        
        <section id="about">
            <h2>About</h2>
            <p>Hello, I'm Jason W. Smith, a DIY drummer dad living the dream in beautiful Nashville, TN.  Quickly becoming a budding web developer learning to code one application at a time.  Please feel free to take a look around!</p>
        </section>
        
        {/* PROJECTS */}
        <section id="my-work">
            <h2>My work</h2>
        <Portfolio/>
            {/* <article>
                <a class="article" href="https://jasonwesleysmith.github.io/Run-buddy/">
                    <h3>Run Buddy</h3>
                    <img src="./images/Run-Buddy-Cover.png" alt="Run Buddy landing page screenshot" />
                </a>
            </article> */}

            {/* <div class="grid">
            <Portfolio link="https://jasonwesleysmith.github.io/horiseon-consolidated-LLC/" img="./images/Horiseon.png" portfolio="Horiseon" alt="Horiseon consolidated refactor screenshot" /> 
            <Portfolio link="" img="" portfolio="" alt="" /> 
            <Portfolio link="" img="" portfolio="" alt="" /> 
            <Portfolio link="" img="" portfolio="" alt="" /> 
                <article>
                    <a class="article" href="https://jasonwesleysmith.github.io/horiseon-consolidated-LLC/">
                        <h3>Horiseon</h3>
                        <img src="./images/Horiseon.png" alt="Horiseon consolidated refactor screenshot" />
                    </a>
                </article>
                <article>
                    <a class="article" href="https://jasonwesleysmith.github.io/super-song-search/">
                        <h3>Super: songSearch</h3>
                        <img src="./images/Super-song-search.png" alt="Screenshot of super song search screenshot" />
                    </a>
                </article>
                <article>
                    <a class="article" href="https://itwasthe90s.herokuapp.com">
                        <h3>It was the 90s</h3>
                        <img src="./images/It-was-the-90s.png" alt="Screenshot of It was the 90s movie forum" />
                    </a>
                </article> 
                <article>
                    <a class="article" href="">
                        <h3>Sample portfolio</h3>
                        <div class="placeholder-image"></div>
                    </a>
                </article>     
            </div> */}
        </section>
        <Footer/>
    </>
  );
}

export default App;
