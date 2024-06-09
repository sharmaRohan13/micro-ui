import React, { Suspense } from "react";
import "./App.scss";

const RedComponent = React.lazy(() => import("red/red"));
const BlueComponent = React.lazy(() => import("blue/blue"));
const GreenComponent = React.lazy(() => import("green/green"));
const YellowComponent = React.lazy(() => import("yellow/yellow"));

export default function () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="windows-logo">
        <RedComponent value={1} />
        <GreenComponent value={2} />
        <BlueComponent value={3} />
        <YellowComponent value={4} />
      </section>
    </Suspense>
  );
}
