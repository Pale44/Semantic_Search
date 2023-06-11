import './style/main.css'
import Nav from './components/nav.jsx'
// import Uploading from './components/file-processing';
import SemanticSearch from './components/semantic-search';

function App() {
  return (
    <div className="App">
      <Nav />
      <SemanticSearch />
    </div>
  );
}

export default App;
