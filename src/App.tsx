import Collapsible from "./Collapsible";
import styled from "styled-components";
import {CollapsibleItem} from "./CollapsibleItem.tsx";
// import {AddCollapsibleForm} from "./AddCollapsibleForm.tsx";
import {type CollapsibleData, type ListItemData, useStore} from "./store.ts";
// import {AddItemForm} from "./AddItemForm.tsx";

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



function App() {

    const { regularData, collapsibleData } = useStore()


    if (!collapsibleData) return <div>Загрузка...</div>;
    return <MainContainer>
        <Container>
            <h2>Сервисы</h2>
            {
                collapsibleData.map(({id, listItemsData, listTitle}: CollapsibleData, index) => (
                    <Collapsible id={id} title={listTitle} listItemsData={listItemsData} key={index}/>
                ))
            }
            {
                regularData.map(({listItemTitle, content, type}: ListItemData, index) => (
                    <CollapsibleItem originalText={listItemTitle} copyText={content} type={type} key={index}/>
                ))
            }
            {/*<AddCollapsibleForm/>*/}
            {/*<AddItemForm/>*/}
        </Container>
    </MainContainer>;

}

export default App;
