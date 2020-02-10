import React, { useState, useEffect } from "react";
import Button from "../src/atoms/Button/index";

export default { title: "Button" };

export const withText: React.SFC = () => <Button>Click Here</Button>;

export const withLoader: React.SFC = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (): void => {
    setLoading(!loading);
  };

  useEffect(() => {
    loading && setTimeout(toggleLoading, 1500);
  });

  return (
    <Button loading={loading} onClick={toggleLoading} disabled={loading}>
      Click Here
    </Button>
  );
};
