import Solution from "./Solution/Solution";

const WhyChooseUs = ({ why_choose_us }) => {
  return (
    <div
      className="w-full bg-cover no-repeat p-12 md:p1-16 lg:p-24"
      style={{
        backgroundImage: `url(${new URL(
          "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        ).toString()})`,
      }}
    >
      <h5 className="text-center text-blue-600 text-2xl" data-aos="fade-right">
        What Sets Us Apart
      </h5>
      <h1
        className="text-center text-black text-3xl md:text-5xl lg:text-6xl max-w-full md:max-w-[60%] mx-auto font-semibold mt-6"
        data-aos="fade-right"
      >
        {why_choose_us?.tagline}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        <Solution
          imageUrl={why_choose_us?.[0]?.image}
          title={why_choose_us?.[0]?.title}
          description={why_choose_us?.[0]?.sub_title}
        />
        <Solution
          imageUrl={why_choose_us?.[1]?.image}
          title={why_choose_us?.[1]?.title}
          description={why_choose_us?.[1]?.sub_title}
        />
        <Solution
          imageUrl={why_choose_us?.[2]?.image}
          title={why_choose_us?.[2]?.title}
          description={why_choose_us?.[2]?.sub_title}
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
