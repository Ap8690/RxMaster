import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Service from "@components/service";
import { SectionTitleType, ItemType } from "@utils/types";

const ServiceArea = ({ className, id, space, data }) => (
  <div
    className={clsx(
      "rn-service-area",
      space === 1 && "rn-section-gapTop1",
      space === 2 && "pb--70",
      className
    )}
    id={id}
  >
    <div id="artist" className="container">
      {data?.section_title && (
        <div className="row mb--50">
          <div className="col-lg-5">
            <img className="rim2" src="/images/gn/graphics1.png"></img>
          </div>

          <div className="col-lg-7">
            <img className="rim3" src="/images/gn/graphics2.png"></img>
            <p className="rtxt1">
              Own your heroes{" "}
              <span>
                as playable characters <br></br>in the multiplatform game.
              </span>
            </p>
            <img className="lim1" src="/images/gn/RX669.png"></img>


<div className="phtbx dkac">
            <div className="col-lg-4 col-sm-12">
              <img className="lim2" src="/images/gn/siju.png"></img>
            </div>

            <div className="col-lg-8 col-sm-12 disfx">
              <p className="dirtxt">
                Designed by <br></br>
                <img className="lim3" src="/images/gn/sijuthoms.png"></img>
                <a href="https://www.linkedin.com/in/thomas-siju-johann-044b131" target="_blank"><img className="linked1" src="/images/gn/linkedin.png"></img></a>
                <br></br>
                Creature Designer & Sculptor <br></br>
Director of  Award Winning animation shows,  <br></br>
Ex - Creative Director - Technicolor, Ex- Art Director- Zynga,  <br></br>
Ex-Digital Sculptor - Digital Domain, <br></br>
Ex- Comic Creator - Virgin Comics.
              </p>
            </div>
</div>

<div className="phtbx mobact">
            <div className="col-lg-4 col-sm-12">
              <img className="lim2" src="/images/gn/siju.png"></img>
              <p className="design">Designed by </p>
                <img className="lim3" src="/images/gn/sijuthoms.png"></img>
                <a href="https://www.linkedin.com/in/thomas-siju-johann-044b131" target="_blank"><img className="linked2" src="/images/gn/linkedin.png"></img></a>
            </div>

            <div className="col-lg-8 col-sm-12 disfx">
              <p className="dirtxt">
        
                Creature Designer & Sculptor <br></br>
Director of  Award Winning animation shows,  <br></br>
Ex - Creative Director - Technicolor, Ex- Art Director- Zynga,  <br></br>
Ex-Digital Sculptor - Digital Domain, <br></br>
Ex- Comic Creator - Virgin Comics.
              </p>
            </div>
</div>


          </div>
        </div>
      )}
    </div>
  </div>
);

ServiceArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  space: PropTypes.oneOf([1, 2]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    items: PropTypes.arrayOf(ItemType),
  }),
};
ServiceArea.defaultProps = {
  space: 1,
};

export default ServiceArea;
