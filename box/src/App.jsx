import React, { Suspense } from "react";
import "./App.scss";

const RedComponent = React.lazy(() => import("red/red"));
const BlueComponent = React.lazy(() => import("blue/blue"));
const GreenComponent = React.lazy(() => import("green/green"));
const YellowComponent = React.lazy(() => import("yellow/yellow"));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section>
        <RedComponent value={1} />
        <BlueComponent value={2} />
        <GreenComponent value={3} />
        <YellowComponent value={4} />
      </section>
    </Suspense>
  );
}
