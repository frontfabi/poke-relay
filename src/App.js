import { Button, Card, Layout, Menu, Typography } from 'antd';
import { useState } from 'react';
import { QueryRenderer } from "react-relay";
import './App.css';
import PokemonQuery from './modules/PokemonQuery';
import env from './services/relayEnv';

function App() {
  const { Header, Content } = Layout;
  const { Title } = Typography;
  const { Meta } = Card;
  const [qty, setQty] = useState(12)

  return (
    <QueryRenderer
      environment={env}
      query={PokemonQuery}
      variables={{
        first: qty
      }}
      render={({ props, error }) => {
        console.log(props, error)
        if(props)
        return (
        <div className="App">
          <Header className="header">
          <Menu theme="dark" mode="horizontal" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Title type="danger" style={{marginBottom: 0}}>Relay Pokedex</Title>
            <Button onClick={() => setQty(qty + 6)} ghost>
              Carregar mais Pokemon
            </Button>
          </Menu>
          </Header>

          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {
                props.pokemons.map((poke) => (
                  <Card
                    hoverable
                    style={{ width: 240, margin: 30 }}
                    cover={<img alt="example" src={poke.image} />}
                  >
                    <Meta title={poke.number} description={poke.name} />
                  </Card>
                ))
              }
            </Content>
          </Layout>
        </div>)
      }}
    />
  );
}

export default App
