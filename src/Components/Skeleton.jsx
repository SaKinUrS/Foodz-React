import React from "react";
import ContentLoader from "react-content-loader";

export function SkeletonSwiper() {
  return (
    <ContentLoader
      speed={2}
      width={365}
      height={480}
      viewBox="0 0 365 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="284" height="284" />
      <rect x="0" y="304" rx="0" ry="0" width="279" height="40" />
      <rect x="0" y="361" rx="0" ry="0" width="176" height="28" />
      <rect x="0" y="410" rx="0" ry="0" width="97" height="31" />
      <rect x="203" y="410" rx="0" ry="0" width="78" height="31" />
    </ContentLoader>
  );
}

export const SkeletonMenu = () => {
  return (
    <ContentLoader
      speed={2}
      width={340 + 75}
      height={481}
      viewBox="0 0 340 481"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="28" y="0" rx="100" ry="100" width="284" height="284" />
      <rect x="24" y="303" rx="0" ry="0" width="292" height="37" />
      <rect x="159" y="229" rx="0" ry="0" width="25" height="19" />
      <rect x="24" y="353" rx="0" ry="0" width="241" height="24" />
      <rect x="24" y="398" rx="0" ry="0" width="106" height="40" />
      <rect x="199" y="398" rx="0" ry="0" width="117" height="40" />
    </ContentLoader>
  );
};
