import PropTypes from "prop-types";
import clsx from "clsx";
import Product from "@components/product/layout-01";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import { ProductType, SectionTitleType } from "@utils/types";

const ProductArea = ({ space, className, data }) => (
    <div
        className={clsx(
            "rn-new-items",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--50">
                <img className="pr1" src="/images/gn/mint.png"></img>

                <div className="col-lg-6 col-sm-12 fll">
                    <img className="pr22" src="/images/gn/Group721.png"></img>

                    <div className="cbox">
                        <p className="cbh">Weapons</p>
                        <p className="cbt">
                        Obverse still hasn’t passed its Gun Control Law. Mint an extra rootin-tootin Firepower as ERC 1155 to survive and assert dominance.{" "}
                        </p>
                        <a
                            href="/"
                            class="grbtn btn btn-large btn-primary sal-animate disnon"
                        >
                            <span>Mont now</span>
                        </a>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 flr">
                    <img className="pr22" src="/images/gn/Group720.png"></img>

                    <div className="cbox1">
                        <p className="cbh">Vehicles</p>
                        <p className="cbt">
                        With gas prices soaring, minting the ERC 1155  flying cars might be an economical choice that won't break the bank.
Our friends at the armory have also installed a complimentary gun that folds into the boot when the wife isn't looking.{" "}
                        </p>
                        <a
                            href="/"
                            class="grbtn btn btn-large btn-primary sal-animate disnon"
                        >
                            <span>Mont now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ProductArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType).isRequired,
    }),
};

ProductArea.defaultProps = {
    space: 1,
};

export default ProductArea;
