import SearchComponent from "../../components/SearchComponent";
import ResultsContainer from "./partials/ResultsContainer";
import styled from 'styled-components';
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/useMoviesContext";


const HomeWrapper = styled.div`
    background: #fff;
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;
`;

const Logo = styled.div`
font-size: 2rem;
color: #fff;
z-index: 1;
padding: 2rem;
font-weight: bold;
color:#fff;
background: #032541;
`;

const HomeContainer = () => {

    const {setPage, setScroll} = useContext(MovieContext);

    useEffect(() => {
        window.onscroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage(prev => prev + 1);
            }
        }
    }, [setPage, setScroll]);

    return (
        <HomeWrapper>
            <Logo>Movies Application</Logo>
            <SearchComponent /> 
            <ResultsContainer />
        </HomeWrapper>
    );
};

export default HomeContainer;