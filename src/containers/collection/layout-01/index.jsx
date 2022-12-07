import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Anchor from "@ui/anchor";
import Collection from "@components/collection";
import { SectionTitleType, CollectionType } from "@utils/types";

const TopCollectionArea = ({ className, id, space, data }) => (
  <div
    className={clsx(
      "rn-collection-area",
      space === 1 && "rn-section-gapTop xvx",
      className
    )}
    id={id}
  >
    <div className="container">
      <div id="whoweare" className="row align-items-center">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 why669">
          <h4 className="hed centeraln wittxt"> WHY 669 </h4>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15 wy66">
          <p className="wwtxt">
            {" "}
            The 669 number is in honour of Sir Nicholas Winton.
            <br></br>
            <br></br>
            Who is Sir Nicholas Winton? <br></br>
            Sir Nicholas Winton was a 29-year-old stockbroker who in 1939
            organized trains out of Prague to secure the safe passage of 669
            Jewish children from Czechoslovakia to England at the dawn of World
            War II. The evacuees, later known as "Winton's Children," knew
            little about their rescuer until the 1980s, when his work finally
            came to light. He was knighted in 2003 and died on July 1, 2015, at
            the age of 106..
          </p>
          <img className="wwtc" src="/images/gn/rx6695.png"></img>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-6 niky">

        <img className="nik" src="/images/gn/niky.jpg"></img>


<p className="sn">Story of Nicholas Winton BBC that's Life : 
<a className="snl" href="https://www.theguardian.com/books/2014/jun/19/if-its-not-possible-life-sir-nicholas-winton-barbara-winton-review" target="_blank"> <i class="feather-book-open"></i> Read </a>
<a className="snl" href="https://www.youtube.com/watch?v=PKkgO06bAZk" target="_blank"> <i class="feather-video"></i> Watch</a></p>


        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-12 dy disnon">

          <img className="dy1" src="/images/gn/d1.png"></img>
          <img className="dy2" src="/images/gn/d2.png"></img>
          <img className="dy3" src="/images/gn/d3.png"></img>
          <img className="dy1" src="/images/gn/d4.png"></img>
          <img className="dy2" src="/images/gn/d5.png"></img>
          <img className="dy3" src="/images/gn/d6.png"></img>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-6 col-12 re0 gi">
          <img className="why00" src="/images/gn/why1.png"></img>
          <img className="why01" src="/images/gn/why2.png"></img>
          <img className="why02" src="/images/gn/why3.png"></img>
         
        </div>

        <div className="col-lg-4 col-md-4 col-sm-6 col-12 re00 disnon">
          <img className="ree5" src="/images/gn/re5.png"></img>
          <img className="ree6" src="/images/gn/re6.png"></img>
        </div>

      </div>
    </div>
  </div>
);

TopCollectionArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  space: PropTypes.oneOf([1, 2]),
  data: PropTypes.shape({
    section_title: SectionTitleType,
    collections: PropTypes.arrayOf(CollectionType),
  }),
};
TopCollectionArea.defaultProps = {
  space: 1,
};

export default TopCollectionArea;
