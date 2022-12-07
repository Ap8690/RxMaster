import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import TopSeller from "@components/top-seller/layout-01";
import NiceSelect from "@ui/nice-select";
import { SectionTitleType, SellerType } from "@utils/types";
import { slugify } from "@utils/methods";

const TopSellerArea = ({ className, space, id, data }) => {
  const [current, setCurrent] = useState("1 day");
  const [sellers, setSellers] = useState([]);
  const changeHandler = (item) => {
    setCurrent(item.value);
  };

  const filterHandler = useCallback(() => {
    const allSellers = data.sellers;
    const filterdSellers = allSellers.filter(
      (seller) => slugify(seller.top_since) === slugify(current)
    );
    setSellers(filterdSellers);
  }, [current, data.sellers]);

  useEffect(() => {
    filterHandler();
  }, [filterHandler]);

  return (
    <div
      className={clsx(
        "rn-top-top-seller-area nice-selector-transparent",

        space === 2 && "rn-section-gapBottom",
        space === 3 && "pt--50",
        className
      )}
      id={id}
    >
      <div className="container">
        <div className="row  mb--30">
          <div className="col-md-2 col-sm-12 ">
            <div class="grbtn btn btn-large btn-primary sal">
              <span>STAKE</span>
            </div>
            <div class="grbtn btn btn-large btn-primary sal">
              <span>RENT</span>
            </div>
            <div class="grbtn btn btn-large btn-primary sal">
              <span>BREED</span>
            </div>
            <div class="grbtn btn btn-large btn-primary sal">
              <span>ROYALTY</span>
            </div>
          </div>

          <div className="col-md-9 col-sm-12 rewd ">
            <img className="re" src="/images/gn/Reward.png"></img>
            <img className="re1" src="/images/gn/ECR1155.png"></img>
            <p className="ret">
              Stake your <span> RX NFT </span> and receive{" "}
              <span>ROYALTY pass</span> limited edition NFT
            </p>
            <img className="re2" src="/images/gn/Group722.png"></img>
            <p className="ret">
              Get Ready to see through the Eyes of your NFT Character a Mind
              Bending world where you Race, Explore, Shoot or Roleplay the
              character you want be. Earn while you game
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

TopSellerArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  space: PropTypes.oneOf([1, 2, 3]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    sellers: PropTypes.arrayOf(SellerType),
  }),
};

TopSellerArea.defaultProps = {
  space: 1,
};

export default TopSellerArea;
