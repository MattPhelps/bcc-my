const Breadcrumb = ({ items, links }: { items: string[], links: string[] }) => {
  
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {links[index] ? (
              <a href={links[index]} className="text-gray-500 text-sm hover:text-blue-500 transition-colors duration-300">{item}</a>
            ) : (
              <span className="text-gray-500 text-sm">{item}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">&#62;</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
