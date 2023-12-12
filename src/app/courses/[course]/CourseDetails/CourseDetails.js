import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";

function convertToEmbedLink(inputLink) {
  const videoIdMatch = inputLink.match(
    /(?:\/embed\/|v=|v\/|vi\/|youtu\.be\/|\/v\/|\/e\/|watch\?v=|&v=|watch\?feature=player_embedded&v=|embed\/|watch\?v=|embed\/)([^#\&\?]*).*/
  );

  if (videoIdMatch && videoIdMatch[1]) {
    const videoId = videoIdMatch[1];
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return embedLink;
  } else {
    return "Invalid YouTube link";
  }
}

const originalLink =
  "https://youtu.be/x39RLWahCII?list=PL1pf33qWCkmghHnYRcVtwfqxtmJUHEJyh";
const embedLink = convertToEmbedLink(originalLink);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function CourseDetails({ courseDetails }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-36 py-12">
      <h1 className="text-center text-black font-bold text-4xl">
        {courseDetails?.title}
      </h1>
      <Box
        className="mt-6"
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {courseDetails?.course_contents?.map((title) => (
            <Tab
              className="text-left capitalize mr-auto font-bold font-sans"
              key={title.id}
              label={title.title}
              {...a11yProps(title.id)}
              sx={{ textAlign: "left" }}
            />
          ))}
        </Tabs>
        {courseDetails?.course_contents?.map((content) => (
          // const embedLink = convertToEmbedLink(content.youtube_url);
          <TabPanel
            className="text-black py-0"
            key={content.id}
            value={value}
            index={content.id - 1}
            sx={{ color: "black", paddingTop: 0, paddingBottom: 0 }}
          >
            <div>
              <h3 className="text-center text-black font-bold text-3xl">
                {content.title}
              </h3>

              <iframe
                width="560"
                height="315"
                src={convertToEmbedLink(content.youtube_url)}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </TabPanel>
        ))}

        {/* <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel> */}
      </Box>
    </div>
  );
}
