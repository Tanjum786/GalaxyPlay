import axios from "axios";

export const getcategorydata = async (setCategories) => {
  try {
    const response = await axios.get("/api/categories");
    setCategories(response.data.categories);
  } catch (error) {
    console.error(error);
  }
};
