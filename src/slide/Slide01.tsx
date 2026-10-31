import React from "react";
import { Slide, FlexBox, Image, Notes } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide01 = () => {
  return (
    <Slide backgroundColor="tertiary">
      <FlexBox height="100%">
        <CustomCard>
          {/* 3D 지누 이미지만 크게 배치 */}
          <Image
            src="/지누단독.jpg"
            height={600}
            style={{ objectFit: 'contain' }}
          />
        </CustomCard>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
  );
};