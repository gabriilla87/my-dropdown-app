import Collapsible from "./Collapsible";
import styled from "styled-components";
import {CollapsibleItem} from "./CollapsibleItem.tsx";

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

export type listItemData = {
    listItemTitle: string;
    content: string;
    type: "link" | "text";
}

type CollapsibleData = {
    listTitle: string;
    listItemsData: listItemData[];
}

function App() {
    const collapsibleData: CollapsibleData[] = [
        {
            listTitle: "Админки сервисов",
            listItemsData: [
                {
                    listItemTitle: "Beltelecom",
                    content: "https://pbx.beltelecom.by/dashboard",
                    type: "link",
                },
                {
                    listItemTitle: "Synology",
                    content: "https://10-128-5-2.drive-bbv.direct.quickconnect.to:8001/",
                    type: "link",
                }
            ]
        },
        {
            listTitle: "АСБ ДБ",
            listItemsData: [
                {
                    listItemTitle: "Логин",
                    content: "Bbv12345678",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "12345678",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "Synology камеры",
            listItemsData: [
                {
                    listItemTitle: "IP",
                    content: "10.128.4.235:5001",
                    type: "text",
                },
                {
                    listItemTitle: "Логин",
                    content: "vladislav.kaziuchuts",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "q|X8ECnuFYlluTk",
                    type: "text",
                },

            ]
        },
        {
            listTitle: "Avest",
            listItemsData: [
                {
                    listItemTitle: "Пароль",
                    content: "12345678",
                    type: "text",
                },
            ]
        },
    ]

    const regularData: listItemData[] = [
        {
            listItemTitle: "Сервак с прогами",
            content: "\\\\10.129.1.110",
            type: "text",
        },
        {
            listItemTitle: "1С",
            content: "10.129.1.111",
            type: "text",
        },
        {
            listItemTitle: "СППИ пароль",
            content: "Qq!12345",
            type: "text",
        },
        {
            listItemTitle: "LKassa",
            content: "https://my.lkassa.by/auth/login",
            type: "text",
        },
    ]

    return (
        <MainContainer>
            <Container>
                <h2>Сервисы</h2>
                {
                    collapsibleData.map(({listItemsData, listTitle}: CollapsibleData, index) => (
                        <Collapsible title={listTitle} listItemsData={listItemsData} key={index}/>
                    ))
                }
                {
                    regularData.map(({listItemTitle, content, type}: listItemData, index) => (
                        <CollapsibleItem originalText={listItemTitle} copyText={content} type={type} key={index}/>
                    ))
                }
            </Container>
        </MainContainer>
    )
}

export default App;
