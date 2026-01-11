import logo from './logo.svg';
import './App.css';
import HelloWorld  from './components/HelloWorld';
const name = 'Salazar'
const imG = 'https://imgs.search.brave.com/XAd0oZZ_s5mkSWC6Fh9F_OAvzz9qmz9WFsYGQSc296s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1pcy15b3Vy/LWZhdm9yaXRlLXR5/bGVyLXRoZS1jcmVh/dG9yLWltYWdlLXYw/LXZwN3ExeTl0MjR3/ZTEuanBlZz93aWR0/aD0zMDAmYXV0bz13/ZWJwJnM9ZjZkNDQ1/NjIwYWRmM2RkMGQ1/MWU5MDczMmU5Y2Ni/YjIwYmY2ZWNmNQ'
const soma = (a, b)=>{
  return a + b;
}
function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <h2>Seja bem vindo, {name}!</h2>
      <p>Somando 4 + 6 : {soma(4,6)}</p>
      <img src = {imG} width = '150px' height = '150px'/>
      <p>Negola da boca grande</p>
      <HelloWorld/>
    </div>
  );
}

export default App;
