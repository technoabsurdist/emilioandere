import './App.css';
import logo from "./logo_beth.png"
import gh_logo from "./github_logo.svg"
import lin_logo from "./linkedin_logo.svg"
import tw_logo from "./twitter_logo.svg"
import scholar_logo from "./google_logo.svg"

function App() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p class="name_title">Emilio Andere</p>
      <p class="paragraph">My name is Emilio Andere, I’m from Guadalajara, Mexico. I'm currently studying Computer Science and Mathematics at UChicago. I focus on full-stack engineering. Database, back-end, or front-end. I previously published under Professor Zhao, and presented that project at NeurIPS ’22. At Impossible Finance I built and launched their whole rewards page, front-end in typescript, and the “learn-and-earn” back-end in Golang. I am constantly adding projects to my github during hackathons, summers, or in my free time in between classes.</p>
      <div className="logos">
        <a className="gh-logo" href="https://github.com/technoabsurdist" target="_blank">
          <img src={gh_logo} alt="logo" />
        </a>
        <a className="lin-logo" href="https://www.linkedin.com/in/emi-andere/" target="_blank">
          <img src={lin_logo} alt='logo' />
        </a>
        <a className="tw-logo" href="https://twitter.com/technoabsurdist" target="_blank">
          <img src={tw_logo} alt='logo' />
        </a>
        <a className="scholar-logo" href="https://scholar.google.com/citations?user=qhHsPrgAAAAJ&hl=en&authuser=1" target="_blank">
          <img src={scholar_logo} alt='logo' />
        </a>
      </div>
   </>
  );
}

export default App;
