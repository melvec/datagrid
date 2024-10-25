import { toast } from "react-toastify";
import { fetchItems } from "../axios/dataAxios";
import { AppDispatch } from "../store";
import { setItems } from "./itemSlice";

// Define the expected shape of the result from fetchItems
interface FetchItemsResult {
  status: "success" | "error";
  message?: string;
  data?: any[]; // Replace 'any[]' with the actual type if known
}

// GET ALL ITEMS
export const getItemsAction = () => async (dispatch: AppDispatch) => {
  const result: FetchItemsResult = await fetchItems();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  if (result.data) {
    dispatch(setItems(result.data));
  } else {
    // Handle the case where data is undefined
    toast.error("No data received");
  }
};
