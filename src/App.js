import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

function App() {

  let name = "Cosmios"

  let pStyle = {
    color: "aqua"
  }

  return (



    <div style={{
      // color: "red",
    }}>

      <Header />

      Merhaba {name}
      <p  style={pStyle}>Bu bir internal css ornegidir</p>
    </div>
  );
}

export default App;
