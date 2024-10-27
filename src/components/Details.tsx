import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Properties from "./Properties";
import Image from "./Image";
import { Item } from "../redux/api";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface DetailsTabsProps {
  selectedItem: Item;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailsTabs({ selectedItem }: DetailsTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Properties" {...a11yProps(0)} />
          <Tab label="Image" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Properties properties={selectedItem.properties} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Image image={selectedItem.guid} />
      </CustomTabPanel>
    </Box>
  );
}
