import Blog from "@/components/Blogs/Blog/Blog";

const baseUrl = process.env.BASE_URL;

const BlogsGrid = async () => {
  const res = await fetch(`${baseUrl}/blogs`);
  const data = await res.json();
  const blogs = data.data[0].data;

  return (
    <div className="p-6 md:p-12 xl:p-24 lg:px-24 py-24">
      <div className="grid gap-y-32 gap-x-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            imageUrl={blog.image}
            authorName="Visiwave"
            commentsCount="5"
            blogTitle={blog.title}
            blogUrl={`/blogs/${blog.id}`}
            time={blog.created_at}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsGrid;
