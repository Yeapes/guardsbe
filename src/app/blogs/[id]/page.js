import BlogHero from "../BlogHero/BlogHero";
import Details from "../blogdetails/Details/Details";

const baseUrl = process.env.BASE_URL;

const BlogDetailsPage = async ({ params }) => {
  const blogRes = await fetch(`${baseUrl}/blog/${params.id}`);
  const data = await blogRes.json();
  const blogData = data.data[0];
  return (
    <div>
      <BlogHero />
      <Details blogData={blogData} />
    </div>
  );
};

export default BlogDetailsPage;
