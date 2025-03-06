import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import styled from "styled-components";

const LoadDiv = styled.div`
    height: 100%;
    padding: 36px;
    color: ${({theme }) => theme.color};
    background-color:${({theme }) => theme.background};
`
export const withLoading = (WrapperComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);
        const [theme] = useContext(ThemeContext);

        useEffect(() => {
            fetch();
        }, []);

        const Loading = (<LoadDiv theme={theme}>ロード中...</LoadDiv>)

        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        }

        return data ? <WrapperComponent data={data}></WrapperComponent> : Loading;
    }
}