/* eslint-disable react/jsx-props-no-spreading */

function Footer() {
  const footitems = [
    { href: '#home', title: 'Home' },
    { href: '#projects', title: 'Projects' },
    { href: '#services', title: 'Services' },
    { href: '#questions', title: 'FAQs' },
    { href: '#team', title: 'Our Team' },
    { href: '#contact', title: 'Contact Us' },
  ];

  const FootItem = ({ href, title }) => {
    return (
      <div>
        <a
          href={href}
          className="font-medium text-sm text-navWords font-['Inter'] tracking-[0.5px] tablet:font-bold tablet:text-lg"
        >
          {title}
        </a>
      </div>
    );
  };

  return (
    <footer
      className="bg-gray-100 px-[35px] py-[62.5px] desktop:px-[120px] desktop:py-[136px]"
      id="foot"
    >
      <div className="flex flex-col desktop:flex-row justify-center desktop:justify-between items-center gap-6">
        <div>Weavers Logo</div>
        <div className="grid grid-cols-2 gap-x-44 gap-y-5">
          {footitems.map((item) => (
            <FootItem key={item.href} {...item} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
