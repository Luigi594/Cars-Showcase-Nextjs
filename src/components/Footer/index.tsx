import Image from "next/image";
import FooterLinks from "./FooterLinks";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 sm:px-16 max-md:flex-col">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="footer logo"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            Carhub {new Date().getFullYear()}
            <br /> All rights reserved &copy;{" "}
          </p>
        </div>

        <div className="footer__links">
          <FooterLinks />
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap mt-10 border-t
              border-gray-100 px-6 py-10 sm:px-16">
        <p>@{new Date().getFullYear()} CardHub. All Rights Reserved.</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>

          <Link href={"/"} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
