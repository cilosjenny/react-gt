import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
function App() {

  return (
    <>
      <Title/>
      <Button conteudo="Botão"/>
      <Button conteudo="Enviar"/>
      <Card>
        <h3> Eu sou um filho</h3>
      </Card>
    </>
  );
}

export default App;
