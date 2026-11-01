import React from 'react';
import { Slide, Heading, Text, Stepper, Box } from 'spectacle';

export const Slide11 = () => {
  return (
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(/리바이어던.webp)"
      backgroundPosition="top center"
      backgroundSize="cover"
    >
      {/* 스텝을 [0, 1]로 두어 초기 상태(0/undefined)와 진입 완료 상태(1)를 명확히 구분합니다 */}
      <Stepper values={[0, 1]}>
        {(value) => {
          // value가 1이 아닐 때(즉, 초기 진입 시) 감사합니다 화면 표시
          // 방향키를 눌러 value가 1이 되면 원본 배경만 표시
          const showThanks = value !== 1;

          return (
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: showThanks ? 'rgba(245, 245, 247, 0.85)' : 'transparent',
                transition: 'background-color 0.8s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {showThanks && (
                <>
                  <Heading fontSize="80px" color="primary" margin="0 0 20px 0">
                    감사합니다
                  </Heading>
                  <Text fontSize="28px" color="secondary" margin="0">
                    Q & A
                  </Text>
                </>
              )}
            </Box>
          );
        }}
      </Stepper>
    </Slide>
  );
};