import React, { ReactNode } from 'react';
import { Slide } from 'spectacle';

interface LeviathanSlideProps {
  children: ReactNode;
}

export const LeviathanSlide: React.FC<LeviathanSlideProps> = ({ children }) => {
  return (
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(/리바이어던.webp)"
      backgroundPosition="top center"
      backgroundSize="cover"
      backgroundOpacity={0.25}
    >
      {children}
    </Slide>
  );
};