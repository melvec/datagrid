import axios from "axios";

export const baseURL = `${import.meta.env.VITE_API_BASE_URL}:${
  import.meta.env.VITE_PORT
}`;

export interface Properties {
  [key: string]: string | number; // Allows any number of properties with string keys and string or number values
}

// Define an interface for each item in the array
export interface Item {
  guid: string;
  name: string;
  path: string[];
  properties: Properties;
}

// Define the array of items
export type ItemsArray = Item[];

export const fetchItems = async (): Promise<ItemsArray> => {
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
