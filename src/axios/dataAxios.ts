import axios from "axios";

const baseURL = `${import.meta.env.VITE_API_BASE_URL}:${
  import.meta.env.VITE_PORT
}`;

export const fetchItems = async () => {
  try {
    const response = await axios({
      method: "get",
      baseURL: `${baseURL}/items`,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
