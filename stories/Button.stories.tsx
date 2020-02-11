import React, { useState, useEffect } from "react";
import { Button } from "../src";

export default { title: "Button" };

export const withText: React.SFC = () => <Button>Click Here</Button>;

export const withLoader: React.SFC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const toggleLoading = (): void => {
    setLoading(!loading);
  };

  const applySuccess = (): void => {
    setSuccess(true);
  };

  const applyFailure = (): void => {
    setFailure(true);
  };

  useEffect(() => {
    loading &&
      setTimeout(() => {
        toggleLoading();
        applySuccess();
      }, 1500);
  });

  return (
    <Button
      loading={loading}
      success={success}
      failure={failure}
      onClick={toggleLoading}
      disabled={loading}
    >
      Click Here
    </Button>
  );
};
