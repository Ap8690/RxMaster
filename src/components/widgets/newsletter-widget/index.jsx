import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";

const NewsletterWidget = ({ data }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(null);

  useEffect(() => {
    if (showMsg) {
      setTimeout(() => {
        setShowMsg(null);
      }, 3000);
    }
  }, [showMsg]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (form.current.user_email.value !== "") {
      setLoading(true);

      fetch("/api/subscribeUser", {
        body: JSON.stringify({
          email: form.current.user_email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((result) => {
          setLoading(false);
          setShowMsg("Thank you for subscribing to our newsletter. You will be the first to know about our updates and giveaways.");
          form.current.user_email.value = "";
        })
        .catch((error) => {
          setLoading(false);
          setShowMsg(`There was an error subscribing to the newsletter.
          Hit me up info@metalabtech.in, anand@metalabtech.in and I'll add you the old fashioned way :()`);
          form.current.user_email.value = "";
        });
    }
  };
  return (
    <div className="widget-bottom pt--40">
      <h6 className="title jf">Join follow</h6>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <input
            type="email"
            name="user_email"
            className="form-control bg-color--2"
            placeholder="Email ID"
            aria-label="Recipient's username"
            disabled={loading}
          />

          <div className="input-group-append">
            <button
              className="btn btn-primary-alta btn-outline-secondary"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Spinner animation="border" />
              ) : (
                <span>SUBSCRIBE</span>
              )}
            </button>
          </div>
          {showMsg && (
            <div
              style={{
                padding: "10px",
                textAlign: "center",
                marginTop: "10px",
                width: "100%",
              }}
            >
              {showMsg}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

NewsletterWidget.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    note: PropTypes.string,
  }),
};
export default NewsletterWidget;
