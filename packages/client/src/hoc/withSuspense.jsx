import React, { Suspense } from "react";
import LazyLoading from "../routeLoader";

const withSuspense = (Component) => (
  <Suspense fallback={<LazyLoading />}>
    <Component />
  </Suspense>
);

export default withSuspense;
