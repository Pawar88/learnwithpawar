// pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <section>
            <div className="td_height_120 td_height_lg_80"></div>
            <div className="td_height_120 td_height_lg_80"></div>
          <div style={{ textAlign: "center", padding: "50px" }}>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you're looking for does not exist.</p>
          <Link to={`/`}>Go back to Home</Link>
        </div>
        <div className="td_height_120 td_height_lg_80"></div>
        </section>
      );
};

export default NotFoundPage;
