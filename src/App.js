import { Layout, Menu, Typography } from 'antd';
import { useLazyLoadQuery } from 'relay-hooks';
import './App.css';
import logo from './logo.svg';
import PokemonQuery from './modules/PokemonQuery';

function App() {
  const { Header, Content } = Layout;
  const { Title } = Typography;
  const {data} = useLazyLoadQuery(PokemonQuery, {
    first: 20
  })
  console.log(data)
  return (
    <div className="App">
      <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Title type="danger">Relay Pokedex</Title>
      </Menu>
      </Header>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
