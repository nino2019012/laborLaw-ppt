import React from 'react';
import { Heading, Text, Stepper, Box } from 'spectacle';
import { LeviathanSlide } from '../components/LeviathanSlide';

export const Slide11 = () => {
  return (
    <LeviathanSlide>
      <Stepper values={[0, 1]}>
        {(value) => {
          // 초기 진입 시(value가 1이 아닐 때): 오버레이 + 감사합니다 & Q&A 노출
          // 방향키 클릭 시(value가 1일 때): 오버레이 및 문구가 사라지고 원본 배경 노출
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
    </LeviathanSlide>
  );
};