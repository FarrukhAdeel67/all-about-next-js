import React from "react";

const ServerComponent = () => {
  return (
    <div>
      Server Component
      <h1>
        I am from sever and I need to be rendered in client side, So, I am
        passed as a children props
      </h1>
    </div>
  );
};

export default ServerComponent;
