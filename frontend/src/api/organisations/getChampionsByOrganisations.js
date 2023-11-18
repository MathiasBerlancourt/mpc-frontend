import { axiosInstance } from "..";

export const useGetChampionsByOrganisations = async () => {
  try {
    const response = await axiosInstance.get("champions");
    return response.data.categories;
  } catch (error) {
    console.error(error);
  }
};
