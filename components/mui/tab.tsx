import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "dark:bg-primary bg-white",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label='TRUSTED IT BUSINESS' {...a11yProps(0)} />
        {/* <Tab label='Item Two' {...a11yProps(1)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <span className='dark:text-brightGray text-gray-800 md:text-2xl text-xl font-bold leading-none capitalize'>
          Backend developer @{" "}
        </span>
        <span className='dark:text-teal-400 text-teal-600 md:text-2xl text-xl font-bold leading-none capitalize'>
          TITB
        </span>
        <div>DEC 2022 - PRESENT</div>
        <ul>
          <li>
            Collaborate with experienced cross-disciplinary Amazonians to
            conceive, design, and bring innovative products and services to
            market.
          </li>
        </ul>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
    </Box>
  );
}
