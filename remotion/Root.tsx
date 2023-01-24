import React from "react";
import { Composition } from "remotion";
import { TestComposition } from "./TestComposition";
 
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Empty"
        component={TestComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};