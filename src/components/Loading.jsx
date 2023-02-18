import React from "react";

import "./loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <img src="/img/loader.gif" />
      <h1 sx={{ color: "#f4af85" }}>Loading...</h1>
    </div>
  );
};

export default Loading;
