import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useMediaQuery from "../../hooks/mediaQuery";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const isHorizontal = useMediaQuery(600);
  const { children, value, index, ...other } = props;
  if (!isHorizontal) {
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
  } else {
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
}

function a11yProps(index: number) {
  const isHorizontal = useMediaQuery(600);
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
}

export default function VerticalTabs() {
  const isHorizontal = useMediaQuery(600);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        bgcolor: "dark:bg-primary bg-white",
        display: "flex",
        height: 300,
      }}
    >
      <Tabs
        orientation={!isHorizontal ? "vertical" : "horizontal"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: "#233554" }}
      >
        <Tab label='TRUSTED IT BUSINESS' {...a11yProps(0)} />
        {/* <Tab label='Item Two' {...a11yProps(1)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3>
          <span className='dark:text-brightGray text-gray-800 md:text-2xl text-xl font-bold leading-none capitalize'>
            Backend developer @{" "}
          </span>
          <span className='dark:text-teal-400 text-teal-600 md:text-2xl text-xl font-bold leading-none capitalize hover:underline'>
            <Link href='https://titb.biz'>TITB</Link>
          </span>
        </h3>
        <p className='leading-7 dark:text-darkGray text-lightGray'>
          DEC 2021 - PRESENT
        </p>
        <ul className='pt-6 max-w-xl'>
          <li className='pb-4 dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'>
            Developed and maintained code for client websites primarily using
            Laravel as backend.
          </li>
          <li className='pb-4 dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'>
            Experience with customized Wordpress site like WooCommerce, Plugins,
            Themes, etc.
          </li>
          <li className='pb-4 dark:text-darkGray text-lightGray text-sm relative md:pl-5 pl-3 before:content-["▹"] before:absolute before:left-0 before:text-teal-400'>
            Collaborated with senior engineers following best practices for the
            best software development including coding standards, code reviews,
            source control management, testing, and deploying.
          </li>
        </ul>
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel> */}
    </Box>
  );
}
