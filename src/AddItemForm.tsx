import styled from "styled-components";
import {useState} from "react";

export const AddItemForm = () => {
    const [headerState, setHeaderState] = useState<"single" | "collapsible">("single");
    const changeHeaderStateToSingle = () => {
        setHeaderState("single");
    }
    const changeHeaderStateToCollapsible = () => {
        setHeaderState("collapsible");
    }
    return (
        <Container>
            <Header>
                <HeaderPart onClick={changeHeaderStateToSingle}
                            style={{ backgroundColor: headerState === "single" ? "lightgray" : "white" }}
                >
                    Одиночное
                </HeaderPart>
                <HeaderPart onClick={changeHeaderStateToCollapsible}

                >
                    Раскрывающее
                </HeaderPart>
            </Header>
        </Container>
    )
}

type HeaderPart = {
    type: "single" | "collapsible";
}

const Container = styled.div`
    //display: flex;
    width: 100%;
    height: 400px;
    margin: 0;
    padding: 0;
    border: 1px solid black;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid red;
`

const HeaderPart = styled.div`
    width: 100%;
    border: 2px solid purple;
    text-align: center;
    cursor: pointer;
`