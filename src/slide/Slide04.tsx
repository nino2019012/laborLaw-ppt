import React from "react";
import { Slide, Heading, FlexBox, Grid, Box, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide04 = () => {
  return (
    <LeviathanSlide>
      <Heading color="primary">노동조합 및 노동관계조정법 제 81조</Heading>
        <Grid 
          gridTemplateColumns="1fr 1fr"
          gridGap={40}
          width="85%"
          style={{
            margin: '0 auto'
          }}
          >
          {/* [좌측 카드] 원칙 ➡️ 본질적 의미(단결권) */}
          <CustomCard
            flex={1}
            height="380px"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left',
              padding: '40px 48px',
            }}
          >
            {/* 1등: 원칙 규정 (priority={0}) */}
            <Appear priority={0}>
              <Box>
                <Text fontSize="24px" fontWeight="bold" color="secondary" margin="0 0 8px 0">
                  제81조 제2항 • 원칙
                </Text>
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  color="primary"
                  margin="0"
                  style={{ wordBreak: 'keep-all', lineHeight: 1.4 }}
                >
                  특정 노조 가입 및 탈퇴를 <br/>채용 조건으로 하는 행위 금지
                </Text>
              </Box>
            </Appear>

            {/* 3등: 좌측 결론 (priority={2}) */}
            <Appear priority={2}>
              <Box style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '16px' }}>
                <Text fontSize="22px" fontWeight="bold" color="primary" margin="0" style={{ wordBreak: 'keep-all' }}>
                  💡 근로자 개인의 단결권 보호
                </Text>
              </Box>
            </Appear>
          </CustomCard>

          {/* [우측 카드] 예외 ➡️ 본질적 의미(조직강제권) */}
          <CustomCard
            flex={1}
            height="380px"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left',
              padding: '40px 48px',
            }}
          >
            {/* 2등: 예외 규정 (priority={1}) */}
            <Appear priority={1}>
              <Box>
                <Text fontSize="24px" fontWeight="bold" color="#e63946" margin="0 0 8px 0">
                  제81조 제2항 • 예외
                </Text>
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  color="primary"
                  margin="0"
                  style={{ wordBreak: 'keep-all', lineHeight: 1.4 }}
                >
                  단, 지배적 노조의 유니언 샵 협약은 예외 인정
                </Text>
              </Box>
            </Appear>

            {/* 4등: 우측 결론 (priority={3}) */}
            <Appear priority={3}>
              <Box style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '16px' }}>
                <Text fontSize="22px" fontWeight="bold" color="#e63946" margin="0" style={{ wordBreak: 'keep-all' }}>
                  💡 노동조합의 조직강제권 보장
                </Text>
              </Box>
            </Appear>
          </CustomCard>
        </Grid>
    </LeviathanSlide>
  );
};