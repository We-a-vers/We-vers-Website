/* eslint-disable react/jsx-props-no-spreading */

function Footer() {
  const firstCol = [
    { href: '#home', title: 'Home' },
    { href: '#services', title: 'Services' },
    { href: '#team', title: 'Our Team' },
  ];

  const secondCol = [
    { href: '#projects', title: 'Projects' },
    { href: '#questions', title: 'FAQs' },
    { href: '#contact', title: 'Contact Us' },
  ];

  const FootItem = ({ href, title }) => {
    return (
      <li className="py-3 px-4">
        <a
          href={href}
          className="font-medium text-sm text-navWords font-['Inter'] tracking-[0.5px] desktop:font-bold desktop:text-lg"
        >
          {title}
        </a>
      </li>
    );
  };

  return (
    <footer
      className="bg-gray-100 px-[35px] py-[62.5px] desktop:px-[120px] desktop:py-[136px]"
      id="foot"
    >
      <div className="flex flex-col desktop:flex-row justify-center items-center gap-6">
        <div>Weavers Logo</div>
        <div className="flex flex-row w-full justify-center gap-20 desktop:justify-end desktop:gap-10">
          <ul className="flex flex-col items-start justify-between">
            {firstCol.map((item) => (
              <FootItem key={item.href} {...item} />
            ))}
          </ul>
          <ul className="flex flex-col iterms-start">
            {secondCol.map((item) => (
              <FootItem key={item.href} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
