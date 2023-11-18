import React from "react";
import styled from "styled-components";
import GetChamps from "../Champs/index.jsx";
import { useOrganisationsCategories } from "./logic.js";

const ContentWrapper = styled.div`
  background-color: #f8f8f8;
  font-family: "Arial", sans-serif;
  margin: 0 auto;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

const CategoryWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h2`
  background-color: #3498db;
  color: #fff;
  padding: 15px;
  margin: 0;
`;

const Organisations = () => {
  const { categories, loading } = useOrganisationsCategories();

  if (loading) {
    return <LoadingMessage>Chargement en cours...</LoadingMessage>;
  }

  if (!categories) {
    return <div>Aucune catégories trouvée</div>;
  }

  return (
    <ContentWrapper>
      {categories.map((category, index) => (
        <CategoryWrapper key={index}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <GetChamps champsList={category.weight_classes} />
        </CategoryWrapper>
      ))}
    </ContentWrapper>
  );
};

export default Organisations;
