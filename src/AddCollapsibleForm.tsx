import {useState} from "react";
import styled from "styled-components";
import {useStore} from "./store.ts";

// type Props = {
//     onChange?: (event: SyntheticEvent<HTMLInputElement>) => void,
//     value?: string
// }



const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 15px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const UpperBlock = styled.div`
    display: flex;
    flex-direction: row;
`

const DownerBlock = styled.div`
    display: flex;
    flex-direction: row;
`

export const AddCollapsibleForm = () => {
    const [textValue, setTextValue] = useState<string>("")
    const [isCollapsed, setIsCollapsed] = useState(false)

    const {addCollapsibleDataItem} = useStore()

    return (
        <Wrapper>
            <UpperBlock>
                <StyledInput onChange={(e) => setTextValue(e.currentTarget.value)} value={textValue} />
                <button onClick={() => addCollapsibleDataItem(textValue)}>Создать</button>
            </UpperBlock>
            <DownerBlock>
                <input type="checkbox" checked={isCollapsed} onChange={() => setIsCollapsed(!isCollapsed)} />
            </DownerBlock>
        </Wrapper>
    )
}