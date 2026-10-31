import React from 'react';
import { Slide, Heading, Stepper, Box } from 'spectacle';

export const Slide02 = () => {
  return (
    // 💡 1. <Slide>가 반드시 최상단에 위치해야 합니다.
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(/리바이어던.webp)"
      backgroundPosition="top center"
    >
      {/* 💡 2. <Slide> 내부에 <Stepper>를 배치합니다. */}
      <Stepper values={[0, 1]}>
        {(value) => {
          const isDimmed = value === 1;

          return (
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                // 배경 이미지를 어둡게 해주는 오버레이 레이어 효과
                backgroundColor: isDimmed ? 'rgba(245, 245, 247, 0.75)' : 'transparent',
                transition: 'background-color 0.8s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingTop: '40px'
              }}
            >
              {/* 💡 두 번째 단계(클릭)에서 목차가 등장합니다 */}
              {isDimmed && (
                <Heading fontSize="80px" color="primary">
                  <i>발표 목차</i>
                </Heading>
              )}
            </Box>
          );
        }}
      </Stepper>
    </Slide>
  );
};