import {useEffect, useState} from "react";
import styled from "styled-components";

const LoadDiv = styled.div`
    padding: 36px;
`
export const withLoading = (WrapperComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch();
        }, []);

        const Loading = (<LoadDiv>ロード中...</LoadDiv>)

        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        }

        return data ? <WrapperComponent data={data}></WrapperComponent> : Loading;
    }
}