import './App.css';

function App() {
  return (
    <>
    
    <header>
        <nav>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#my-work">My Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>    
    </header>
    <section class="photo-greeting">
        <img src="./images/Me.jpeg" alt="Jason is smiling and being awesome"/>
        <h1>
            <a href="/">I N V O L V E D : J A S O N</a>
        </h1>
    </section>
    
    <section id="about">
        <h2>About</h2>
        <p>Hello, I'm Jason W. Smith, a DIY drummer dad living the dream in beautiful Nashville, TN.  Quickly becoming a budding web developer learning to code one application at a time.  Please feel free to take a look around!</p>
    </section>
    
    <section id="my-work">
        <h2>My work</h2>
        <article>
            <a class="article" href="https://jasonwesleysmith.github.io/Run-buddy/">
                <h3>Run Buddy</h3>
                <img src="./images/Run-Buddy-Cover.png" alt="Run Buddy landing page screenshot" />
            </a>
        </article>
        <div class="grid">
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
                    <h3>Sample Project</h3>
                    <div class="placeholder-image"></div>
                </a>
            </article>     
        </div>
    </section>
    
    <section id="contact">
        <h2>Contact:</h2>
        <article id="contact-links">
        <a href="tel:+8165509299">816.550.9299</a>
        <a href="mailto:jasonwesleysmith82@gmail.com">Email</a>
        <a href="https://github.com/Jasonwesleysmith">Github</a>
        <a href="https://www.linkedin.com/in/jason-smith-0aa94ab1/">Linkedin</a>
        </article>
    </section>
</>
  );
}

export default App;
