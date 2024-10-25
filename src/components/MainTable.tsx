import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailsTabs from "./Details";
import { getItemsAction } from "../redux/itemActions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";

interface Path {
  path: string[];
}

interface Properties {
  [key: string]: string | number;
}

export interface DataItem {
  guid: string;
  name: string;
  path: string[];
  properties: Properties;
}

export default function MainTable() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const dispatch = useDispatch();
  const { items } = useSelector((state: AppDispatch) => ({
    items: state.item.items,
    isLoading: state.item.isLoading,
  }));

  useEffect(() => {
    dispatch(getItemsAction());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleRowClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="data table">
          <TableHead>
            <TableRow>
              <TableCell>GUID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Path</TableCell>
              <TableCell>Properties</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.guid}
                hover
                onClick={() => handleRowClick(item)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{item.guid}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.path.join(", ")}</TableCell>
                <TableCell>
                  {Object.entries(item.properties).map(([key, value]) => (
                    <div key={key}>
                      {key}: {value.toString()}
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedItem && <DetailsTabs selectedItem={selectedItem} />}
    </div>
  );
}
