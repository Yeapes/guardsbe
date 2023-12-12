import Blog from "./Blog/Blog";

const Blogs = ({ blogs }) => {
  return (
    <div className="p-6 md:p-12 xl:p-24 lg:px-24 py-24 mb-18">
      <h2
        className="text-center text-4xl mb-6 font-semibold text-black"
        data-aos="fade-right"
      >
        VisiWave Insights
      </h2>
      <div className="grid gap-y-32 gap-x-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {blogs?.map((blog) => (
          <Blog
            key={blog.id}
            imageUrl={blog.image}
            date="08"
            month="July"
            authorName="Visiwave"
            commentsCount="5"
            blogTitle={blog.title}
            blogUrl={`/blogs/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
