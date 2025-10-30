import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 border-t border-white/10 text-base-content p-10">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved. <strong>Syed Shafin Ahmed</strong></p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;