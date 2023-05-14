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
      <p class="paragraph">
          I am 20 years old, originally from Guadalajara, Mexico. I'm currently studying Computer Science and Mathematics at UChicago. 
          I focus on full-stack engineering. Database, back-end, or front-end. I previously published under Professor Zhao, and presented that project at NeurIPS '22. <br /> <br /> 
          I currently work at <a href="https://spherepay.co/">sphere</a> as a software engineer intern. <br /> <br />
          <a href="https://mirror.xyz/emiandere.eth">This</a> is where I very sparingly and very sometimes write.
      </p>
      <div className="logos">
        <a className="gh-logo" href="https://github.com/technoabsurdist" target="_blank" rel="noreferrer">
          <img src={gh_logo} alt="logo" />
        </a>
        <a className="lin-logo" href="https://www.linkedin.com/in/emi-andere/" target="_blank" rel="noreferrer">
          <img src={lin_logo} alt='logo' />
        </a>
        <a className="tw-logo" href="https://twitter.com/technoabsurdist" target="_blank" rel="noreferrer">
          <img src={tw_logo} alt='logo' />
        </a>
        <a className="scholar-logo" href="https://scholar.google.com/citations?user=qhHsPrgAAAAJ&hl=en&authuser=1" target="_blank" rel="noreferrer">
          <img src={scholar_logo} alt='logo' />
        </a>
      </div>
   </>
  );
}

export default App;
