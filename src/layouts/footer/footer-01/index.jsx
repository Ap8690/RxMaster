import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import LogoWidget from "@widgets/logo-widget";
import NewsletterWidget from "@widgets/newsletter-widget";
import QuicklinkWidget from "@widgets/quicklink-widget";
import InformationWidget from "@widgets/information-widget";
import SoldOutWidget from "@widgets/sold-out-widget";
import FooterLinkWidget from "@widgets/footer-link-widget";
import SocialWidget from "@widgets/social-widget";
import { ItemType } from "@utils/types";

// Demo data
import footerData from "../../../data/general/footer-01.json";
import contactData from "../../../data/general/contact.json";

const Footer = ({ space, className, data }) => (
  <>
    <div
      className={clsx(
        "rn-footer-one",
        space === 1 && "rn-section-gap mt--100 mt_md--80 mt_sm--80",
        space === 2 && "rn-section-gap",
        space === 3 && "mt--100 mt_md--80 mt_sm--80",
        className
      )}
    >
      {data?.items && (
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <ul className="nu-brand-area">
                {data.items.map(({ id, image }) => (
                  <li key={id}>
                    {image?.src && (
                      <Image
                        src={image.src}
                        alt={image?.alt || "nuron-brand_nft"}
                        layout="fill"
                        objectFit="contain"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div id="partners" className="container ">
        <div className="row gx-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 part">
            <h4 className="hed centeraln bwntxt"> Partners </h4>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt_mobile--15 par">
            <h3 className="markt1">Our Technology Partners</h3>
            <div className="col-md-12 ptbx">
              <img className="pt" src="/images/gn/pt/pt1.png"></img>
              <img className="pt" src="/images/gn/pt/pt2.png"></img>
              <img className="pt" src="/images/gn/pt/pt3.png"></img>
              <img className="pt" src="/images/gn/pt/pt4.png"></img>
              <img className="pt" src="/images/gn/pt/pt5.png"></img>
            </div>

            <h3 className="markt disnon">Marketing Partners</h3>
            <div className="col-md-12 ptbx disnon">
              <img className="pt" src="/images/gn/pt/pt6.png"></img>
              <img className="pt" src="/images/gn/pt/pt7.png"></img>
              <img className="pt" src="/images/gn/pt/pt8.png"></img>
              <img className="pt" src="/images/gn/pt/pt9.png"></img>
              <img className="pt" src="/images/gn/pt/pt10.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="newsletter" className="copy-right-one ptb--20 bg-color--1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-left">
              <LogoWidget data={footerData["logo-widget"]} />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-right">
              <SocialWidget socials={contactData.socials} />
            </div>
          </div>
        </div>

        <div className="row gx-5 marnewslet">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="widget-content-wrapper">
              <NewsletterWidget data={footerData["newsletter-widget"]} />
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-left">
              <img className="footerlogo" src="/images/gn/footerlogo.png"></img>
              <p className="fottxt">
                Developed by <br></br>Metalab Technologies
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="copyright-right">
              <p>© 2022 Metalab Technologies Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

Footer.propTypes = {
  space: PropTypes.oneOf([1, 2, 3]),
  className: PropTypes.string,
  data: PropTypes.shape({
    items: PropTypes.arrayOf(ItemType),
  }),
};

Footer.defaultProps = {
  space: 1,
};

export default Footer;
