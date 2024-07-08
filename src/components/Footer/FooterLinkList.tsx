const FooterLinkList = ({ title, links }) => {
  return (
    <div>
      <h5 className="font-semibold text-[black] dark:text-[white] mb-5">
        {title}
      </h5>

      <ul className="flex flex-col gap-3.5">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "dofollow" : ""}
              className="font-medium ease-in duration-300 hover:text-[black] dark:hover:text-[white]"
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
