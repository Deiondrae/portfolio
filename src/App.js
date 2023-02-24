import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}

export default App;
