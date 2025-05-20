import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import UserProfile from "./components/UserProfile";

function App() {

  const usuario= {
    nome:"Jenny Cilos",
    status:"Ativo"
  }


  return (
    <>
      <Title/>
      <Button conteudo="Botão"/>
      <Button conteudo="Enviar"/>
      <Card>
        <h3> Eu sou um filho</h3>
      </Card>

        <UserProfile  profile={usuario}/>
    </>
  );
}

export default App;
