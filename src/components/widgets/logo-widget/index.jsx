import PropTypes from "prop-types";
import Logo from "@components/logo";

const LogoWidget = ({ data }) => (
    <div className="footer-left">
        <Logo logo={data.logo} />
    </div>
);

export default LogoWidget;
