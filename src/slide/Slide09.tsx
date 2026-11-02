import React, { useState } from "react";
import { Heading, Grid, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide09 = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const PRIMARY_COLOR = "#2a9d8f"; 
  const BG_COLOR = "#e9f5f3";      

  return (
    <LeviathanSlide>
      <Heading margin="-10px 0px 40px 0px" fontSize="50px" color="primary">
        평석 ① : 다수의견 지지
      </Heading>

      <Appear>
        <Grid 
          gridTemplateColumns="1fr" 
          width="85%" 
          height="500px"
          style={{ margin: '-30px auto 0 auto' }}
        >
          <div 
            onClick={() => setShowDetail(!showDetail)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              height: '100%', // 💡 고정 높이 유지
              width: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: isHovered ? '0 12px 24px rgba(42, 157, 143, 0.2)' : 'none',
              borderRadius: '16px',
              boxSizing: 'border-box'
            }}
          >
            {!showDetail ? (
              /* [앞면] 카드 크기 고정 */
              <CustomCard style={{
                width: '100%',
                height: '100%', // 💡 부모(500px)의 100% 사용
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 40px',
                boxSizing: 'border-box', // 💡 패딩 포함 높이 계산
                borderTop: `6px solid ${PRIMARY_COLOR}`,
                backgroundColor: '#ffffff'
              }}>
                <Text fontSize="40px" fontWeight="bold" color="#264653" margin="0 0 16px 0" style={{ textAlign: 'center', lineHeight: 1.4, wordBreak: 'keep-all' }}>
                  소극적 단결권을 제10조·제21조로 포섭한<br /><span style={{ color: PRIMARY_COLOR }}>헌재 다수의견의 법리는 타당하다</span>
                </Text>

                <Text fontSize="25px" color="secondary" margin="0" style={{ textAlign: 'center', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  반대의견의 논리를 무력화하는 2가지 법리적 근거
                </Text>

                <Text fontSize="14px" color={PRIMARY_COLOR} margin="32px 0 0 0" fontWeight="bold">
                  click
                </Text>
              </CustomCard>
            ) : (
              /* [뒷면] 카드 크기 앞면과 완전히 동일 고정 */
              <CustomCard style={{
                width: '100%',
                height: '100%', // 💡 부모(500px)의 100% 사용
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 40px', // 💡 내부 내용물이 많아 높이가 늘어나는 것을 방지하기 위해 패딩 조율
                boxSizing: 'border-box', // 💡 패딩 포함 높이 계산
                backgroundColor: BG_COLOR,
                border: `2px solid ${PRIMARY_COLOR}`
              }}>
                {/* 근거 1 */}
                <div style={{ backgroundColor: '#ffffff', borderLeft: `5px solid ${PRIMARY_COLOR}`, padding: '14px 20px', borderRadius: '8px', width: '100%', marginBottom: '12px', boxSizing: 'border-box' }}>
                  <Text fontSize="35px" fontWeight="bold" color={PRIMARY_COLOR} margin="0 0 4px 0">
                    1. 논리적 모순의 방지
                  </Text>
                  <Text fontSize="25px" color="#264653" margin="0" style={{ lineHeight: 1.4, wordBreak: 'keep-all' }}>
                    소극적 단결권을 제33조 제1항의 핵심으로 인정하면,<br />
                    <strong>'단결할 자유' 자체를 스스로 무력화하는 법리적 모순</strong>이 발생함
                  </Text>
                </div>

                {/* 근거 2 */}
                <div style={{ backgroundColor: '#ffffff', borderLeft: `5px solid #264653`, padding: '14px 20px', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
                  <Text fontSize="35px" fontWeight="bold" color="#264653" margin="0 0 4px 0">
                    2. 헌법 제33조의 본질적 목적
                  </Text>
                  <Text fontSize="25px" color="#264653" margin="0" style={{ lineHeight: 1.4, wordBreak: 'keep-all' }}>
                    제33조는 집단적 단결을 통해 <strong>노사 대등성을 형성</strong>하도록<br />
                    특별히 부여된 <strong>'생존권적 기본권'</strong>임
                  </Text>
                </div>
              </CustomCard>
            )}
          </div>
        </Grid>
      </Appear>
    </LeviathanSlide>
  );
};