import { useContext, useState } from "react";
import styled from 'styled-components';
import { MovieContext } from "../context/useMoviesContext";

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    align-items: center;
    margin: auto;
`;

const SearchButton = styled.div`
display: inline-block;
padding: 0.5rem 0.8rem;
background: #032541;
border-radius: 8px;
font-size: 1rem;
color: #fff;
flex-grow: 0;
z-index: 1;
padding: .8rem 2rem;
cursor: pointer;
font-weight: bold;
margin-left:1rem; 

@media (max-width: 768px) {
  padding: .6rem 1rem;
}

@media (max-width: 425px) {
  padding: .6rem 1rem;
}
`;

const SearchInput = styled.input`
    width: 80%;
    height: 3rem;
    outline: none;
    border-radius: 8px;
    padding: 0 .8rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      width: 60%;
      height: 2.5rem;
      font-size: .8rem;
      border-radius: .7rem;
    }

    @media (max-width: 425px) {
      width: 40%;
      height: 2.5rem;
      font-size: .8rem;
      border-radius: .7rem;
    }
`;

const SearchComponent = () => {
    const [input, setInput] = useState('');
    const {handleInputSearch} = useContext(MovieContext);

    return (
        <SearchContainer>
            <SearchInput placeholder="Search  Movies..." type="text" onChange={(e) => {
                setInput(e.target.value);
            }}/>
            <SearchButton onClick={() => handleInputSearch(input.toLocaleLowerCase() || '')}> Search</SearchButton>
        </SearchContainer>
    );
};

export default SearchComponent;