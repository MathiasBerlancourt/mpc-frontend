import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import GetChamps from "../GetChamps/index.jsx";

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

const GetOrgas = () => {
  const apiUrl = "http://localhost:3001/api/champions";
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchDatas();
  }, []);

  return (
    <ContentWrapper>
      {loading ? (
        <LoadingMessage>Chargement en cours...</LoadingMessage>
      ) : (
        categories.map((category, index) => (
          <CategoryWrapper key={index}>
            <CategoryTitle>{category.name}</CategoryTitle>
            <GetChamps champsList={category.weight_classes} />
          </CategoryWrapper>
        ))
      )}
    </ContentWrapper>
  );
};

export default GetOrgas;
