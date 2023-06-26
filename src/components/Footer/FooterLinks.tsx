import { footerLinks } from "@/constants";
import Link from "next/link";

function FooterLinks() {
  return (
    <>
      {footerLinks.map((link) => (
        <div key={link.title} className="footer__link">
          <h3 className="font-bold">{link.title}</h3>

          {link.links.map((item) => (
            <Link key={item.title} href={item.url} className="text-gray-500">
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

export default FooterLinks;
