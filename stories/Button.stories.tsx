import React, { useState, useEffect } from "react";
import { Button } from "../src";

export default { title: "Button" };

export const withText: React.SFC = () => <Button>Click Here</Button>;

export const withLoader: React.SFC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleOnClick = (): void => {
    setLoading(true);
  };

  const applySuccess = (): void => {
    setSuccess(true);
    setLoading(false);
  };

  const applyFailure = (): void => {
    setFailure(true);
    setLoading(false);
  };

  useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
        applySuccess();
      }, 1500);
  });

  return (
    <Button
      loading={loading}
      success={success}
      failure={failure}
      onClick={handleOnClick}
      disabled={loading}
    >
      Click Here
    </Button>
  );
};
