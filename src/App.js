import {List} from "./List";
import {useContext, useEffect, useState} from "react";
import {Form} from "./Form";
import {getLanguages} from "./const/languages";
import {withLoading} from "./hoc/withLoading";
import {Header} from "./Header";
import styled, {ThemeContext} from "styled-components";

const Container = styled.div`
    height: 100%;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.background};
`

function App({data}) {
    // stateによるコンポーネントの状態の変更
    // 引数1：state 　引数２：stateを変更する関数
    const [tab, setTab] = useState('list');
    const [langs, setLangs] = useState(data);

    // useEffect(() => {
    //     console.log('App.js:useEffect');
    //     fetchLanguages();
    // })
    //
    // const fetchLanguages = async () => {
    //     const languages = await getLanguages();
    //     setLangs(languages);
    // }
    const [theme] = useContext(ThemeContext);
    const addLang = (lang) => {
        setLangs([...langs, lang]);
        setTab('list');
    };
    return (
        <Container theme={theme}>
            <Header tab={tab} setTab={setTab}/>
            {
                tab === 'list' ? <List langs={langs}></List> : <Form onAddLang={addLang}></Form>
            }
        </Container>
    );
}

export default App;
