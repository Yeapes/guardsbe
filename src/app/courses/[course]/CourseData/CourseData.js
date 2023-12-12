import { getTokenFromLocalStorage } from "../../Courses/Courses";

const baseUrl = process.env.BASE_URL;

const CourseData = ({ courseId }) => {
  // useEffect(() => {
  //   const token = getTokenFromLocalStorage(); // Get the token from localStorage

  //   if (!token) {
  //     // Handle the case where the token is not available
  //     return;
  //   }

  //   fetch(`${baseUrl}/course/${courseId}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Include the token in the headers
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setCourseDetails(data?.data?.[0]);
  //     });
  // }, [courseId]);

  const token = getTokenFromLocalStorage();
  if (!token) {
    return;
  }

  return <div>{/* <CourseDetails courseDetails={courseDetails} /> */}</div>;
};

export default CourseData;
