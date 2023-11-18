import { useEffect, useState } from "react";
import { useGetChampionsByOrganisations } from "../api/organisations/getChampionsByOrganisations";

export const useOrganisationsCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    const result = await useGetChampionsByOrganisations(setLoading);
    setLoading(false);
    if (result) {
      setCategories(result);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
  };
};
