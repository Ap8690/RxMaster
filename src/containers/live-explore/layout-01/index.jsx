import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-01";
import Product from "@components/product/layout-01";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, ProductType } from "@utils/types";

const SliderOptions = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const LiveExploreArea = ({ data, className, space }) => (
  <div
    className={clsx(
      "rn-live-bidding-area",
      space === 1 && "rn-section-gapTop",
      className
    )}
  >
    <div className="container-full">
      {data?.section_title && (
        <div className="row mb--50">
          <div className="col-lg-6 pdr0 col-sm-12">
            <p className="rtxt">
              Live the future and take on an unfathomable journey to become the
              next Hero
            </p>
            <img className="lim" src="/images/gn/l2.png"></img>
          </div>

          <div className="col-lg-12 pdr0">
            <img className="rim" src="/images/gn/l3.png"></img>
          </div>
        </div>
      )}
    </div>
  </div>
);

LiveExploreArea.propTypes = {
  className: PropTypes.string,
  space: PropTypes.oneOf([1, 2]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    products: PropTypes.arrayOf(ProductType).isRequired,
    placeBid: PropTypes.bool,
  }),
};

LiveExploreArea.defaultProps = {
  space: 1,
};

export default LiveExploreArea;
