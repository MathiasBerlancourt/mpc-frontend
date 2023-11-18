import React from "react";
import styled from "styled-components";

const ChampsWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChampDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const WeightTitle = styled.h3`
  font-size: 16px;
`;

const CompetitorInfo = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 14px;
    color: grey;
  }
`;

const NoDataMessage = styled.p`
  font-size: 16px;
  color: #777;
`;

const ChampionsCard = ({ champsList }) => {
  return (
    <div>
      {champsList ? (
        champsList.map((champ, index) => (
          <ChampsWrapper key={index}>
            <ChampDescription>{champ.description}</ChampDescription>
            <WeightTitle>{champ.weight}</WeightTitle>
            <CompetitorInfo>
              <p>{champ.competitor.name}</p>
              <p>{champ.competitor.abbreviation}</p>
              <p>{champ.competitor.gender}</p>
            </CompetitorInfo>
          </ChampsWrapper>
        ))
      ) : (
        <NoDataMessage>No data available</NoDataMessage>
      )}
    </div>
  );
};

export default ChampionsCard;
