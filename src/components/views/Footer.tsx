const Footer = () => {
  return (
    <footer className="bg-[#121318] flex flex-col items-center text-gray-600 space-y-2 sm:space-y-0 py-5 sm:flex-row  sm:justify-start gap-20 sm:py-10 border-t border-gray-800 px-5">
      <div>
        {" "}
        &copy; {new Date().getFullYear()} CryptoHunt. All rights reserved.{" "}
      </div>
      <div className=" flex gap-8 text-gray-500 ">
        <p>| Privacy</p>
        <p>| Terms</p>
        <p>| Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
