import React from "react";
import { Icon } from "../../index";

interface ITransitionIcon {
  loading?: boolean;
  success?: boolean;
  failure?: boolean;
}

const TransitionIcon: React.SFC<ITransitionIcon> = ({
  loading,
  success,
  failure
}: ITransitionIcon) => {
  const renderLoading = () =>
    loading && <Icon icon="spinner" spin transform="grow-5" />;

  // const renderSuccess = () =>
  //   loading && (
  //     <span className="icon">
  //       <Icon icon="spinner" spin transform="grow-5" />
  //     </span>
  //   );

  const renderLogic = () => {
    if (success) {
      return "yes";
    } else if (loading) {
      return renderLoading();
    } else if (failure) {
      return "no";
    }
    return null;
  };

  return <>{renderLogic()}</>;
};

export default TransitionIcon;
