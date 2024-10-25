import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DetailsTabs from "./Details";
import { useFetchItemsQuery } from "../redux/api";
import { Item } from "../axios/dataAxios";

export default function MainTable() {
  const { data: items, error, isLoading } = useFetchItemsQuery();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !items) {
    return <div>Oops! Something went wrong</div>;
  }

  const handleRowClick = (item: Item) => {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.guid}
                hover
                onClick={() => handleRowClick(item)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{item.guid}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.path.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <hr />
      {selectedItem && <DetailsTabs selectedItem={selectedItem} />}
    </div>
  );
}
