import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";

const HeroArea = ({ data }) => (
  <div className="slider-one rn-section-gapTop">
    <div className="container">
      <div className="row row-reverce-sm align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12 dismo">
          <img className="sli-hed" src="/images/slider/slider-1.png"></img>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50 dfc">
          <p className="hdf">
            {" "}
            A <span class="hd1">Mobile First</span> play and Earn
            AA Open World GAME set in the metaverse{" "}
            backed by the Web 3.0
            Ecosystem.{" "}
          </p>
<a class="grbtn btn btn-large btn-primary sal-animate dfb mr10" href="https://discord.gg/PJ4V6fj6d8" target="_blank" rel="noreferrer">
 <span>Join Discord</span> </a>
          <a
            href="https://twitter.com/RX669series"
            class="grbtn btn btn-large btn-primary sal-animate dfb" target="_blank"
          >
            <span>Follow Twitter</span>
          </a>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 dismo">
          <img className="sli-hed1" src="/images/gn/l1.png"></img>
        </div>
      </div>
    </div>
  </div>
);

HeroArea.propTypes = {
  data: PropTypes.shape({
    headings: PropTypes.arrayOf(HeadingType),
    texts: PropTypes.arrayOf(TextType),
    buttons: PropTypes.arrayOf(ButtonType),
    images: PropTypes.arrayOf(ImageType),
  }),
};

export default HeroArea;
