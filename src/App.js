import {List} from "./List";
import {useEffect, useState} from "react";
import {Form} from "./Form";
import {getLanguages} from "./const/languages";
import styled  from "styled-components";
import {withLoading} from "./hoc/withLoading";

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 24px 64px 0;
    border-bottom: px solid #EOEOE0;
`

const HeaderUl = styled.ul`
    display:flex;
    margin:0;
    padding:0;
`

const HeaderLi = styled.ul`
    list-style:none;
    padding:4px 12px;
    cursor:pointer;
    border-bottom:${props=> props.focused ? '2px solid #F44336' : 'none'};
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

    const addLang = (lang) => {
        setLangs([...langs, lang]);
        setTab('list');
    };
    return (
        <div>
            <Header>
                <HeaderUl>
                    <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
                    <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
                </HeaderUl>
            </Header>
            {
                tab === 'list' ? <List langs={langs}></List> : <Form onAddlang={addLang}></Form>
            }
        </div>
    );
}

export default withLoading(App, getLanguages);
