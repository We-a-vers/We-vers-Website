/* eslint-disable react/jsx-props-no-spreading */

function Footer() {
  const firstRow = [
    { href: '#home', title: 'Home' },
    { href: '#projects', title: 'Projects' },
  ];

  const secondRow = [
    { href: '#services', title: 'Services' },
    { href: '#questions', title: 'FAQs' },
  ];

  const thirdRow = [
    { href: '#team', title: 'Our Team' },
    { href: '#contact', title: 'Contact Us' },
  ];

  const FootItem = ({ href, title }) => {
    return (
      <li className="flex flex-row align-left">
        <button type="button">
          <a href={href}>{title}</a>
        </button>
      </li>
    );
  };

  return (
    <footer className="px-[35px] py-[62.5px]" id="foot">
      <div className="flex flex-col justify-between items-center">
        <div>Weavers Logo</div>
        <ul className="flex flex-row justify-between">
          {firstRow.map((item) => (
            <FootItem key={item.href} {...item} />
          ))}
        </ul>

        <ul className="flex flex-row ">
          {secondRow.map((item) => (
            <FootItem key={item.href} {...item} />
          ))}
        </ul>

        <ul className="flex flex-row ">
          {thirdRow.map((item) => (
            <FootItem key={item.href} {...item} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
