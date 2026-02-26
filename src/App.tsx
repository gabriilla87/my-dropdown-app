import Collapsible from "./Collapsible";
import { CollapsibleItem } from "./CollapsibleItem";
import styled from "styled-components";
import {HoverCopyText} from "./HoverCopyText.tsx";

const Hr = styled.hr`
  margin: 0 5px;
`

const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  font-family: Arial;
`

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  //align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

type MyData = {
  title: string;
  link: string;
}

type CopyInfo = {
  originalText: string;
  copyText: string;
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

  const copyInfo: CopyInfo[] = [
    {
      originalText: "Сервак с прогами",
      copyText: "\\\\10.129.1.110"
    },
    {
      originalText: "1С",
      copyText: "10.129.1.111"
    },
    {
      originalText: "СППИ пароль",
      copyText: "Qq!12345"
    }
  ]

  return (
    <MainContainer>
      <Container>
        <h2>Полезные ссылки</h2>

        <Collapsible title="Админки сервисов">
          {myData.map((item: MyData, index) => (
              <>
                <CollapsibleItem href={item.link}>{item.title}</CollapsibleItem>
                {index !== myData.length - 1 && <Hr />}
              </>
          ))}
        </Collapsible>
        <Collapsible title={"ACБ ДБ"}>
          <HoverCopyText originalText={"Логин"} copyText={"Bbv12345678"}/>
          <HoverCopyText originalText={"Пароль"} copyText={"12345678"}/>
        </Collapsible>
        {copyInfo.map(({originalText, copyText}: CopyInfo, index: number) => (
            <HoverCopyText originalText={originalText} copyText={copyText} key={index}/>
        ))}
      </Container>
    </MainContainer>

  );
}

export default App;
