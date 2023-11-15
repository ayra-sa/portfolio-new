import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="text-center py-5 font-semibold opacity-60">
        <p>© Arya {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
