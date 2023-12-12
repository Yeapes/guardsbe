import Link from "next/link";

const FooterLinksSection = ({ title, items }) => {
  return (
    <div data-aos="fade-right">
      <h3 className="text-2xl text-white font-semibold py-4">{title}</h3>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <Link
                className="text-white py-1 block text-lg"
                key={item.title}
                href={`${item.itemUrl ? item.itemUrl : "/industry/"}`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinksSection;
