import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import Collection from "@components/collection";
import { SectionTitleType, CollectionType } from "@utils/types";

const Team = ({ className, id, space, data }) => (
  <div
    className={clsx(
      "team-collection-area",
      space === 1 && "rn-section-gapTop xvx",
      className
    )}
    id={id}
  >
    <div className="container">
      <div id="whoweare" className="row mb--50 align-items-center">
        <div id="team" className="col-lg-12 col-md-12 col-sm-12 col-12 why669">
          <h4 className="hed centeraln wittxt"> Our Team </h4>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt_mobile--15 wy66">
          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t1.png"></img>
            <p className="nm">ZIdan</p>
            <p className="dg">Director</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t2.png"></img>
            <p className="nm">
              Anand{" "}
              <a
                href="https://www.linkedin.com/in/diplomatatmetaverse"
                target="_blank"
              >
                <img className="linked" src="/images/gn/linkedin.png"></img>
              </a>
            </p>
            <p className="dg">Chief Executive officer</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t3.png"></img>
            <p className="nm">
              Arinjay{" "}
              <a href="https://www.linkedin.com/in/arinjayc" target="_blank">
                <img className="linked" src="/images/gn/linkedin.png"></img>
              </a>
            </p>
            <p className="dg">Game designer </p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t4.png"></img>
            <p className="nm">
              Sreekar{" "}
              <a href="https://www.linkedin.com/in/sreekarvvg" target="_blank">
                <img className="linked" src="/images/gn/linkedin.png"></img>
              </a>
            </p>
            <p className="dg">Web 3.0 product manager</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t5.png"></img>
            <p className="nm">Rabbi</p>
            <p className="dg">Game developer</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t6.png"></img>
            <p className="nm">Suruz </p>
            <p className="dg">game Developer</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t7.png"></img>
            <p className="nm">
              Aditya{" "}
              <a
                href="https://www.linkedin.com/in/aditya-kishore-a628b8200/"
                target="_blank"
              >
                <img className="linked" src="/images/gn/linkedin.png"></img>
              </a>
            </p>
            <p className="dg">game Concept artist</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t9.png"></img>
            <p className="nm">Amal </p>
            <p className="dg">3d Artist</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t8.png"></img>
            <p className="nm">Prashanth</p>
            <p className="dg">3d Artist</p>
          </div>

          <div className="col-md-2 col-sm-6 tmbx">
            <img className="ww" src="/images/gn/tm/t10.png"></img>
            <p className="nm">
              Shalini{" "}
              <a
                href="https://www.linkedin.com/in/shalini-jayachandran-3dtechnicalartist-ar-vr-mr"
                target="_blank"
              >
                <img className="linked" src="/images/gn/linkedin.png"></img>
              </a>
            </p>
            <p className="dg">operations head</p>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 col-12 why669 disnon">
          <h4 className="hed centeraln bwntxt"> Advisors </h4>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt_mobile--15 wy66 disnon">
          <div className="col-md-3 marbx"></div>

          <div className="col-md-3 marbx">
            <img className="ww" src="/images/gn/tm/adv1.png"></img>
            <p className="nm1">Kathryn Murphy</p>
            <p className="dg1">Marketing Coordinator</p>
            <p className="disc">
              Physiological respiration involves the mechanisms that ensure that
              the composition of the functional residual capacity is kept{" "}
            </p>
          </div>

          <div className="col-md-3 marbx">
            <img className="ww" src="/images/gn/tm/adv2.png"></img>
            <p className="nm1">Arlene McCoy</p>
            <p className="dg1">Web Designer</p>
            <p className="disc">
              Physiological respiration involves the mechanisms that ensure that
              the composition of the functional residual capacity is kept{" "}
            </p>
          </div>

          <div className="col-md-3 marbx">
            <img className="ww" src="/images/gn/tm/adv3.png"></img>
            <p className="nm1">Jenny Wilson</p>
            <p className="dg1">Marketing Coordinator</p>
            <p className="disc">
              Physiological respiration involves the mechanisms that ensure that
              the composition of the functional residual capacity is kept{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Team.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  space: PropTypes.oneOf([1, 2]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    collections: PropTypes.arrayOf(CollectionType),
  }),
};
Team.defaultProps = {
  space: 1,
};

export default Team;
