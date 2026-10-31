import React, { ReactNode } from 'react';
import { Slide, FlexBox } from 'spectacle';

interface LeviathanSlideProps {
  children: ReactNode;
}

export const LeviathanSlide: React.FC<LeviathanSlideProps> = ({ children }) => {
  return (
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(/리바이어던.webp)"
      backgroundPosition="top center"
      backgroundOpacity={0.25}
    >
      <FlexBox height="100%" flexDirection="column">
        {children}
      </FlexBox>
    </Slide>
  );
};