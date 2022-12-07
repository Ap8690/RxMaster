import { useReducer, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Product from "@components/product/layout-01";
import ProductFilter from "@components/product-filter/layout-01";
import FilterButton from "@ui/filter-button";
import { slideToggle } from "@utils/methods";
import { SectionTitleType, ProductType } from "@utils/types";

function reducer(state, action) {
  switch (action.type) {
    case "FILTER_TOGGLE":
      return { ...state, filterToggle: !state.filterToggle };
    case "SET_INPUTS":
      return { ...state, inputs: { ...state.inputs, ...action.payload } };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ExploreProductArea = ({ className, space, data }) => {
  const itemsToFilter = [...data.products];
  const [state, dispatch] = useReducer(reducer, {
    filterToggle: false,
    products: data.products || [],
    inputs: { price: [0, 100] },
  });
  const filterRef = useRef(null);
  const filterHandler = () => {
    dispatch({ type: "FILTER_TOGGLE" });
    if (!filterRef.current) return;
    slideToggle(filterRef.current);
  };

  const slectHandler = ({ value }, name) => {
    dispatch({ type: "SET_INPUTS", payload: { [name]: value } });
  };

  const priceHandler = (value) => {
    dispatch({ type: "SET_INPUTS", payload: { price: value } });
  };

  const sortHandler = ({ value }) => {
    const sortedProducts = state.products.sort((a, b) => {
      if (value === "most-liked") {
        return a.likeCount < b.likeCount ? 1 : -1;
      }
      return a.likeCount > b.likeCount ? 1 : -1;
    });
    dispatch({ type: "SET_PRODUCTS", payload: sortedProducts });
  };

  const filterMethods = (item, filterKey, value) => {
    if (value === "all") return false;
    let itemKey = filterKey;
    if (filterKey === "category") {
      itemKey = "categories";
    }
    if (filterKey === "price") {
      return (
        item[itemKey].amount <= value[0] / 100 ||
        item[itemKey].amount >= value[1] / 100
      );
    }
    if (Array.isArray(item[itemKey])) {
      return !item[itemKey].includes(value);
    }
    if (filterKey === "collection") {
      return item[itemKey].name !== value;
    }
    return item[itemKey] !== value;
  };

  const itemFilterHandler = useCallback(() => {
    let filteredItems = [];

    filteredItems = itemsToFilter.filter((item) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key in state.inputs) {
        if (filterMethods(item, key, state.inputs[key])) return false;
      }
      return true;
    });
    dispatch({ type: "SET_PRODUCTS", payload: filteredItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.inputs]);

  useEffect(() => {
    itemFilterHandler();
  }, [itemFilterHandler]);
  return (
    <div
      className={clsx(
        "rn-product-area",
        space === 1 && "rn-section-gapTop",
        className
      )}
    >
      <div id="roadmap" className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <h4 class="rmhd hed centeraln bwntxt"> Roadmap </h4>
          </div>
          <div className="col-lg-6 col-md-3 col-sm-6 col-12 dinn">
            <img className="rd1" src="/images/gn/Group724.png"></img>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-6 col-12 dinn">
            <p className="rmtxt mim">
              {" "}
              NFT Design <br></br>3D VR Sculpt <br></br>Blockchain To Unity
              Integration{" "}
            </p>
            <p className="rmtxt">
              {" "}
              Game Design Document <br></br>
              Game Mechanics <br></br>
              Game controls prototype <br></br>
              3D RX NFT Asset development <br></br>
              Finalize Marketing Partner{" "}
            </p>
            <p className="rmtxt">
              {" "}
              NFT Sale - 6690 RX NFTs <br></br>
              Playable Game Demo Android Launch. <br></br>
              AR NFT Rewards & Reward Collaborations{" "}
            </p>
            <p className="rmtxt">
              {" "}
              AR App Release. <br></br>
              Playable Game Demo IOS Launch .<br></br>
              Game Level 1 MVP Android Beta Launch.<br></br>
              Finalize Game Economy and Tokenomics<br></br>
              Stake NFT.{" "}
            </p>
            <p className="rmtxt">
              {" "}
              2023 Q1<br></br>
              Play and Earn Mobile Game Launch<br></br>
              $RXToken Launch. <br></br>
              Rent TicketPass NFT<br></br>
              Breed NFT <br></br>
              Q2 Next release of RX 6690 NFTs. <br></br>
              Collaborations<br></br>
              Marketplace{" "}
            </p>
          </div>

          <div class="ag-timeline-block">
            <section class="ag-section">
              <div class="ag-format-container">
                <div class="js-timeline ag-timeline">
                  <div class="js-timeline_line ag-timeline_line">
                    <div class="js-timeline_line-progress ag-timeline_line-progress"></div>
                  </div>
                  <div class="ag-timeline_list">
                    <div class="js-timeline_item js-ag-animated ag-timeline_item dinn">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 13</div>
                            <div class="ag-timeline-card_desc">
                              NFT Design <br></br>
                              3D VR Sculpt
                              <br></br>
                              Blockchain To Unity Integration<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2021</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 13</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 13</div>
                            <div
                              class="ag-timeline-card_desc" style={{position: "relative"}}
                            >
                                <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  background: "#e56e00",
                                  borderRadius: "777px",
                                  position: "absolute",
                                  left: "-40px",
                                }}
                              ></div>
                              NFT Design <br></br>
                              3D VR Sculpt
                              <br></br>
                              Blockchain To Unity Integration<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2021</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 13</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item dinn">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 12</div>
                            <div class="ag-timeline-card_desc" style={{position: "relative"}}>
                              <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  background: "#e56e00",
                                  borderRadius: "777px",
                                  position: "absolute",
                                  left: "-40px",
                                }}
                              ></div>
                              Game Design Document
                              <br></br>
                              Game Mechanics
                              <br></br>
                              Game controls prototype<br></br>
                              3D RX NFT Asset development<br></br>
                              Finalize Marketing Partner<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2020</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 12</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 12</div>
                            <div class="ag-timeline-card_desc" style={{position: "relative"}}>
                              <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  background: "#e56e00",
                                  borderRadius: "777px",
                                  position: "absolute",
                                  left: "-40px",
                                }}
                              ></div>
                              Game Design Document
                              <br></br>
                              Game Mechanics
                              <br></br>
                              Game controls prototype<br></br>
                              3D RX NFT Asset development<br></br>
                              Finalize Marketing Partner<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2020</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 12</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item dinn">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 11</div>
                            <div class="ag-timeline-card_desc" style={{position: "relative"}}>
                              <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  background: "#e56e00",
                                  borderRadius: "777px",
                                  position: "absolute",
                                  left: "-40px",
                                }}
                              ></div>
                              NFT Sale - 6690 RX NFTs<br></br>
                              Playable Game Demo Android Launch.
                              <br></br>
                              AR NFT Rewards & Reward Collaborations
                              <br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2020</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 11</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 11</div>
                            <div class="ag-timeline-card_desc" style={{position: "relative"}}>
                              <div
                                style={{
                                  width: "15px",
                                  height: "15px",
                                  background: "#e56e00",
                                  borderRadius: "777px",
                                  position: "absolute",
                                  left: "-40px",
                                }}
                              ></div>
                              NFT Sale - 6690 RX NFTs<br></br>
                              Playable Game Demo Android Launch.
                              <br></br>
                              AR NFT Rewards & Reward Collaborations
                              <br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2020</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 11</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item dinn">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 10</div>
                            <div class="ag-timeline-card_desc">
                              AR App Release.
                              <br></br>
                              Playable Game Demo IOS Launch .<br></br>
                              Game Level 1 MVP Android Beta Launch.
                              <br></br>
                              Finalize Game Economy and Tokenomics<br></br>
                              Stake NFT.<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2019</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 10</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 10</div>
                            <div class="ag-timeline-card_desc">
                              AR App Release.
                              <br></br>
                              Playable Game Demo IOS Launch .<br></br>
                              Game Level 1 MVP Android Beta Launch.
                              <br></br>
                              Finalize Game Economy and Tokenomics<br></br>
                              Stake NFT.<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2019</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 10</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item dinn">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 9</div>
                            <div class="ag-timeline-card_desc">
                              2023 Q1<br></br>
                              Play and Earn Mobile Game Launch<br></br>
                              $RXToken Launch.
                              <br></br>
                              Rent TicketPass NFT
                              <br></br>
                              Breed NFT<br></br>
                              Q2 Next release of RX 6690 NFTs.
                              <br></br>
                              Collaborations
                              <br></br>
                              Marketplace<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2019</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 9</div>
                      </div>
                    </div>

                    <div class="js-timeline_item js-ag-animated ag-timeline_item">
                      <div class="ag-timeline-card_item">
                        <div class="ag-timeline-card_inner">
                          <div class="ag-timeline-card_info">
                            <div class="ag-timeline-card_title">Season 9</div>
                            <div class="ag-timeline-card_desc">
                              2023 Q1<br></br>
                              Play and Earn Mobile Game Launch<br></br>
                              $RXToken Launch.
                              <br></br>
                              Rent TicketPass NFT
                              <br></br>
                              Breed NFT<br></br>
                              Q2 Next release of RX 6690 NFTs.
                              <br></br>
                              Collaborations
                              <br></br>
                              Marketplace<br></br>
                            </div>
                          </div>
                        </div>
                        <div class="ag-timeline-card_arrow"></div>
                      </div>
                      <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">2019</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">Season 9</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

ExploreProductArea.propTypes = {
  className: PropTypes.string,
  space: PropTypes.oneOf([1, 2]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    products: PropTypes.arrayOf(ProductType),
    placeBid: PropTypes.bool,
  }),
};

ExploreProductArea.defaultProps = {
  space: 1,
};

export default ExploreProductArea;
