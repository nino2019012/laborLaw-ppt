import React from "react";
import { Slide, Heading, FlexBox, Grid, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide05 = () => {
  return (
    <LeviathanSlide>
      <Heading margin="0 0 40px 0" color="primary">
        <span>소극적 단결권의 침해 문제</span>
      </Heading>
        <Grid gridTemplateColumns="1fr" width="85%" style={{ position: 'relative', height: '380px' }}>
          
          {/* 1단계: 적극적 vs 소극적 단결권 비교 (priority={0}) */}
          <Appear priority={0}>
            <Grid 
              gridTemplateColumns="1fr auto 1fr" 
              gridGap={24} 
              alignItems="center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '380px'
              }}
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
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
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
          </Appear>

          {/* 2단계: 클릭 시 오버레이되는 쟁점 제기 카드 (priority={1}) */}
          <Appear priority={1}>
            <CustomCard
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
                padding: '40px 48px',
                borderLeft: '6px solid #e63946',
                backgroundColor: '#ffffff',
                zIndex: 2,
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
          </Appear>

        </Grid>
    </LeviathanSlide>
  );
};