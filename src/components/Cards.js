import styled from 'styled-components';
import CONSTANTS from '../constants/appConstants';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 0.8rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    background: #fff;
    gap: .6rem;
    border-radius: 7px;
`;

const CardTitle = styled.div`
    font-size: 1rem;
    font-weight: 700;
    padding-left:1rem;
    text-align:left;
`;

const CardImage = styled.img`
    object-fit: contain;
    width: 100%;
    border-radius-top-left: 8px;
    border-radius-top-right: 8px;
    border-radius: 7px 7px 0 0;
`;

const CardReleaseDate = styled.div`
    font-weight: 500;
    color: rgba(0,0,0,0.6);
    font-size: 1rem;
    padding-left:1rem;
    text-align:left;
`;

const CardOverview = styled.div`
    margin: auto;
    padding: 1rem;
    padding-top:0;
    text-align:left;
`;

const Cards = ({moviesData}) => {
    return (
      <CardContainer>
        <CardImage src={ moviesData.poster_path ? `${CONSTANTS.IMAGE_BASE}/${moviesData.poster_path}` : CONSTANTS.DEFAULT_IMAGE }/>
        <CardTitle>{moviesData.title}</CardTitle>
        <CardReleaseDate>Released On: {moviesData.release_date}</CardReleaseDate>
        <CardOverview>{moviesData.overview.split(".")[0].slice(0, 100)}...</CardOverview>
      </CardContainer>
    );
};

export default Cards;