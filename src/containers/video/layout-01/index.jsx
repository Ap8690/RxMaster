import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import VideoButton from "@ui/video-button";
import { ImageType } from "@utils/types";

const VideoArea = ({
    className,
    space,
    data: { section_title, images, video },
}) => (
    <div
        className={clsx(
            "vedio-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--40">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="hed centeraln wittxt"> Who are we ? </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-6 botbv">
                    <img className="bott" src="/images/gn/bot.png"></img>
                </div>
                <div className="col-6 position-relative disn">
                    {video?.videoId && <VideoButton videoId={video.videoId} />}
                    {images?.[0]?.src && (
                        <div className="vedio-wrapper">
                            <Image
                                src={images[0].src}
                                alt={images[0]?.alt || "Video BG"}
                                width={1368}
                                height={610}
                            />
                        </div>
                    )}
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <p className="wwtxt">
                        {" "}
                        We are not just trying to ride the Hype Train. We have been doing
                        this for our bread and butter for a little over a decade
                        now. Researching, Innovating, Building products using
                        future focussed traditional and immersive technologies.
                    </p>

                    <p className="wwtxt">
                        Our team has a combined experience of close to a hundred
                        years spanning across serious production for
                        international art houses , movies, multi national brands
                        , mobile games , Augmented Reality , Virtual reality
                        products , games and VR arcades.{" "}
                    </p>
                    <p className="wwtxt">
                        {" "}
                        We dont want to over promise but we might just surprise you !
                    </p>
                </div>
            </div>
        </div>
    </div>
);

VideoArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
        }),
        images: PropTypes.arrayOf(ImageType),
        video: PropTypes.shape({
            videoId: PropTypes.string,
        }),
    }),
};

VideoArea.defaultProps = {
    space: 1,
};

export default VideoArea;
