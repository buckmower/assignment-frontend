import React from "react";
import styled from "styled-components";

function SearchBarCompnent() {
    return (
        <SearchBar>
            <Input
                type="text"
                className="w-full bg-black text-white p-2"
                placeholder="Search"
            />
            <SearchIconContainer className="bg-gray-800">
                <IconContainer><i className="fa-solid fa-search text-white"></i></IconContainer>
            </SearchIconContainer>
        </SearchBar>
    );
}

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchIconContainer = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 0px 5px 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const Input = styled.input`
    border: 1px solid #999;
    border-radius: 5px 0px 0 5px;
`;

const SearchBar = styled.div`
    display: flex;
    position: relative;
    width: 350px;
    height: 40px;
    background-color: #000;
    i {
        font-size: 20px;
    }
`;
export default SearchBarCompnent;