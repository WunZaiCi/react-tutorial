import {Modal} from "./components/modal";
import styled from "styled-components";
import {ThemeContext} from "./contexts/ThemeContext";
import {Button} from "./components/button";
import {useContext} from "react";
import {THEMES} from "./contexts/ThemeContext";

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px 36px;
    color: ${({theme }) => theme.color};
    background-color:${({theme }) => theme.background};
    border: ${({theme}) => theme === THEMES.dark ? '2px solid white' : 'none'};
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`

export const FormModal = ({confirm, cancel}) => {
    const [theme] = useContext(ThemeContext);
    return (
        <Modal>
            <Container theme={theme}>
                <div>本当に作成しますか？</div>
                <ButtonWrapper>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}