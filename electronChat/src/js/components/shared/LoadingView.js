import { Loader } from "./Loader";

export const LoadingView = ({ message = "Just one moment pleases" }) => {
  return (
    <div className={"loading-screen"}>
      <div className={"loading-view"}>
        <div className={"loading-view-container"}>
          <div className={"mb-3"}>{message}</div>
          <Loader />
        </div>
      </div>
    </div>
  );
};