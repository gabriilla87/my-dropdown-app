import Collapsible from "./Collapsible";
import styled from "styled-components";
import {CollapsibleItem} from "./CollapsibleItem.tsx";
// import {Input} from "./Input.tsx";
// import {useState} from "react";

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
                    listItemTitle: "Пароль",
                    content: "Bbv12345678",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "1c мои данные",
            listItemsData: [
                {
                    listItemTitle: "Логин",
                    content: "srv1c.local\\kaziuchuts.v",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "uxyYYfu4aTj!K2!",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "Почта",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "ms6.g-cloud.by",
                    type: "text",
                },
                {
                    listItemTitle: "Логин",
                    content: "kaziuchuts.v@belblank.by",
                    type: "text",
                },
                {
                    listItemTitle: "Пароль",
                    content: "kzfm4j3ESg2CRA",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "Для добавления rdp",
            listItemsData: [
                {
                    listItemTitle: "Префикс имени пользователя",
                    content: "srv1c.local\\[имя пользователя]",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "1c сервер Документооборот",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "192.168.13.60",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "UZD_DO_EE",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "1c сервер МБ",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "192.168.13.12",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "MB_PE",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "1c сервер УТ",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "ws-cluster1,ws-cluster2",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "YT_PE",
                    type: "text",
                },
            ]
        },
        {
            listTitle: "1c сервер ЗП",
            listItemsData: [
                {
                    listItemTitle: "Сервер",
                    content: "192.168.13.12",
                    type: "text",
                },
                {
                    listItemTitle: "Имя",
                    content: "MZ_PE",
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
            type: "link",
        },
    ]

    // const [textValue, setTextValue] = useState<string>("")

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
                {/*<Input onChange={(e) => (setTextValue(e.currentTarget.value))}*/}
                {/*       value={textValue}*/}
                {/*/>*/}
            </Container>
        </MainContainer>
    )
}

export default App;
