const FooterLinkList = ({ title, links }) => {
  return (
    <div>
      <h5 className="font-bold text-xl text-[black] dark:text-[white] mb-5">
        {title}
      </h5>

      <ul className="flex flex-col gap-3.5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "dofollow" : ""}
              className={`font-small ease-in text-[black]/80 py-1 px-1 border border-transparent rounded hover:bg-[#f3f3f3] dark:hover:text-[white]`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
