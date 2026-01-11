import logo from './logo.svg';
import './App.css';
import HelloWorld  from './components/helloworld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

const name = 'Salazar';
function App() {
  return (
    <div className="App">
      <SayMyName nome = {name}/>
      <Pessoa nome = {name} idade = '20' foto = 'https://imgs.search.brave.com/_TBNZh23sCQTA1eWAuAgWdYEfX5EgtYpQcnRVfqnvMo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Js/YWRlcnVubmVyL2lt/YWdlcy85LzkwL0su/anBnL3JldmlzaW9u/L2xhdGVzdC9zY2Fs/ZS10by13aWR0aC1k/b3duLzI2OD9jYj0y/MDE5MDUxOTA0NTYw/OQ'/>
    </div>
  );
}

export default App;
