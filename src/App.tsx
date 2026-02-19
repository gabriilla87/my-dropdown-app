import Collapsible from "./Collapsible";
import { CollapsibleItem } from "./CollapsibleItem";
import styled from "styled-components";

const Hr = styled.hr`
  margin: 0 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  font-family: Arial;
`

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

type MyData = {
  title: string;
  link: string;
}

function App() {
  const myData: MyData[] = [
    {
      title: "Beltelecom",
      link: "https://pbx.beltelecom.by/dashboard",
    },
    {
      title: "Synology",
      link: "https://10-128-5-2.drive-bbv.direct.quickconnect.to:8001/",
    }
  ]

  return (
    <MainContainer>
      <Container>
        <h2>Полезные ссылки</h2>

        <Collapsible title="Админки сервисов">
          {myData.map((item: MyData) => (
              <CollapsibleItem href={item.link}>{item.title}</CollapsibleItem>
          ))}
        </Collapsible>
      </Container>
    </MainContainer>

  );
}

export default App;
