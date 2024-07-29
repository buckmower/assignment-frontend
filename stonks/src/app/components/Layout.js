import React from 'react';
import styled from 'styled-components';
import StreamChat from './StreamChat';

function Layout(props) {
    return (
        <MainContainer>
            <LeftCol className="left-column">Left</LeftCol>
            <CenterCol className="center-column">Center</CenterCol>
            <RightCol className="right-column" theme={props.theme}><StreamChat /></RightCol>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display: flex;
    height: calc(100vh - 55px);
    max-width: 100vw;
    overflow-y: scroll;
    @media (max-width: 768px) {
        .left-column,
        .right-column {
            display: none;
        }

        .center-column {
            flex: 1;
        }
    }
`
const LeftCol = styled.div`
    flex: 1;
    background-color: #f0f0f0;
    padding: 20px;
`
const CenterCol = styled.div`
    position: relative;
    flex: 3;
    background-color: #e0e0e0;
    padding: 20px;
`
const RightCol = styled.div`
    flex: 1;
    background-color: ${(props) => props.theme === "dark" ? "#1B1D1D" : "#fff"};
`

export default Layout;