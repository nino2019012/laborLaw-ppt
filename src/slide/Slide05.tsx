import React from "react";
import { Heading, Grid, Text, Stepper } from "spectacle"; // 💡 Stepper 임포트
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide05 = () => {
  return (
    <LeviathanSlide>
      <Heading margin="0 0 40px 0" color="primary">
        <span>소극적 단결권의 침해 문제</span>
      </Heading>

      {/* 💡 Appear 대신 Stepper를 사용하여 상태(Step)에 따라 렌더링 컴포넌트를 교체 */}
      <Stepper values={['step1', 'step2']}>
        {(value, step) => (
          <Grid
            gridTemplateColumns="1fr"
            width="85%"
            style={{
              margin: '0 auto',
              position: 'relative',
              height: '400px'
            }}
          >
            
            {/* 1단계: 첫 번째 클릭 시 렌더링 (또는 슬라이드 진입 시 바로 보이게 하려면 step <= 0 으로 변경) */}
            {step === 0 && (
              <Grid 
                gridTemplateColumns="1fr auto 1fr" 
                gridGap={24} 
                alignItems="center"
                style={{ width: '100%', height: '100%' }}
              >
                {/* 좌측: 적극적 단결권 CustomCard */}
                <CustomCard
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '32px 28px',
                    boxSizing: 'border-box'
                  }}
                >
                  <Text fontSize="36px" fontWeight="bold" color="primary" margin="0 0 12px 0" style={{ wordBreak: 'keep-all' }}>
                    적극적 단결권
                  </Text>
                  <Text fontSize="18px" color="secondary" margin="0" style={{ wordBreak: 'keep-all', lineHeight: 1.5 }}>
                    근로자가 노동조합을 스스로 결성하거나 원하는 노조에 자유롭게 가입하여 활동할 권리
                  </Text>
                </CustomCard>

                {/* 중앙: VS */}
                <Text 
                  fontSize="30px" 
                  fontWeight="900" 
                  color="secondary" 
                  margin="0"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  VS
                </Text>

                {/* 우측: 소극적 단결권 CustomCard */}
                <CustomCard
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '32px 28px',
                    border: '2px solid rgba(230,57,70,0.3)',
                    boxSizing: 'border-box'
                  }}
                >
                  <Text fontSize="36px" fontWeight="bold" color="#e63946" margin="0 0 12px 0" style={{ wordBreak: 'keep-all' }}>
                    소극적 단결권
                  </Text>
                  <Text fontSize="18px" color="secondary" margin="0" style={{ wordBreak: 'keep-all', lineHeight: 1.5 }}>
                    노동조합에 가입하지 않거나, 결성된 기존 노동조합에서 탈퇴할 수 있는 자유와 권리
                  </Text>
                </CustomCard>
              </Grid>
            )}

            {/* 💡 2단계: 두 번째 클릭 시 1단계 Grid는 언마운트 되고 이 카드로 완전히 즉시 대체됨 */}
            {step >= 1 && (
              <CustomCard
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'left',
                  padding: '40px 48px',
                  borderLeft: '6px solid #e63946',
                  backgroundColor: '#ffffff',
                  boxSizing: 'border-box'
                }}
              >
                <Text fontSize="22px" fontWeight="bold" color="#e63946" margin="0 0 12px 0">
                  쟁점
                </Text>
                <Text fontSize="40px" fontWeight="bold" color="primary" margin="0 0 16px 0" style={{ wordBreak: 'keep-all', lineHeight: 1.4 }}>
                  유니언 샵 협약은 <span style={{ color: '#e63946' }}>소극적 단결권</span>을 침해하는가?
                </Text>
                <Text fontSize="19px" color="secondary" margin="0" style={{ wordBreak: 'keep-all', lineHeight: 1.5 }}>
                  노조 탈퇴가 곧 '해고'로 이어지는 구조에서 근로자 개인의 '가입하지 않을 자유'는 실질적으로 보장되는가?
                </Text>
              </CustomCard>
            )}

          </Grid>
        )}
      </Stepper>
    </LeviathanSlide>
  );
};