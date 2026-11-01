import React, { useState } from "react";
import { Heading, Grid, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide07 = () => {
  // 좌측/우측 카드 상세 정보 열림 상태
  const [showLeftDetail, setShowLeftDetail] = useState(false);
  const [showRightDetail, setShowRightDetail] = useState(false);

  // 호버 상태 관리
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <LeviathanSlide>
      <Heading margin="20px 0px 20px 0px" fontSize="50px" color="primary">
        기본권의 충돌과 헌재의 우위 판단
      </Heading>

      <Appear>
        <Grid 
          gridTemplateColumns="1fr 1fr" 
          gridGap={24}
          width="90%" 
          height="500px"
          style={{ margin: '0 auto' }}
        >
          {/* ==================== 좌측: 적극적 단결권 (우위) ==================== */}
          <div 
            onClick={() => setShowLeftDetail(!showLeftDetail)}
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            style={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: isLeftHovered ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: isLeftHovered ? '0 12px 24px rgba(29, 53, 87, 0.15)' : 'none',
              borderRadius: '16px'
            }}
          >
            {!showLeftDetail ? (
              /* [좌측 앞면] 적극적 단결권 요약 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                borderTop: '6px solid #1d3557',
                backgroundColor: '#ffffff'
              }}>
                <Text fontSize="40px" fontWeight="bold" color="primary" margin="0 0 16px 0">
                  헌법 제33조 제1항
                </Text>
                <Text fontSize="30px" fontWeight="bold" color="#1d3557" margin="0 0 12px 0" style={{ wordBreak: 'keep-all' }}>
                  적극적 단결권
                </Text>
                <Text fontSize="20px" color="secondary" margin="0" style={{ textAlign: 'center', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  근로자가 노동조합을 스스로 결성하고<br />자유롭게 활동할 권리
                </Text>
                <Text fontSize="14px" color="#1d3557" margin="24px 0 0 0" fontWeight="bold">
                  click!
                </Text>
              </CustomCard>
            ) : (
              /* [좌측 뒷면] 파스텔 블루 (#eef2f7) 배경 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                backgroundColor: '#eef2f7', // 💡 연한 파란색 적용
               
              }}>
                <Text fontSize="28px" color="#1d3557" margin="0 0 16px 0" style={{ lineHeight: 1.6, textAlign: 'center', wordBreak: 'keep-all' }}>
                  <strong>'생존권적 기본권'</strong>으로서<br/> 노조의 결성·유지를 위한 단결강제를 최우선적으로 보호함
                </Text>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #1d355730', padding: '10px 16px', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
                  <Text fontSize="20px" color="#1d3557" fontWeight="bold" margin="0" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                    헌재: 소극적 단결권보다 <strong>우월한 지위</strong> 인정
                  </Text>
                </div>
              </CustomCard>
            )}
          </div>

          {/* ==================== 우측: 소극적 단결권 (제한 가능) ==================== */}
          <div 
            onClick={() => setShowRightDetail(!showRightDetail)}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            style={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: isRightHovered ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: isRightHovered ? '0 12px 24px rgba(230, 57, 70, 0.15)' : 'none',
              borderRadius: '16px'
            }}
          >
            {!showRightDetail ? (
              /* [우측 앞면] 소극적 단결권 요약 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                borderTop: '6px solid #e63946',
                backgroundColor: '#ffffff'
              }}>
                <Text fontSize="40px" fontWeight="bold" color="#e63946" margin="0 0 16px 0">
                  헌법 제10조 / 제21조
                </Text>
                <Text fontSize="30px" fontWeight="bold" color="#e63946" margin="0 0 12px 0" style={{ wordBreak: 'keep-all' }}>
                  소극적 단결권
                </Text>
                <Text fontSize="20px" color="secondary" margin="0" style={{ textAlign: 'center', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  노동조합에 가입하지 않거나<br/> 탈퇴할 수 있는 자유와 권리
                </Text>
                <Text fontSize="14px" color="#e63946" margin="24px 0 0 0" fontWeight="bold">
                  click!
                </Text>
              </CustomCard>
            ) : (
              /* [우측 뒷면] 파스텔 레드 (#fdf0f0) 배경 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                backgroundColor: '#fdf0f0', // 💡 연한 빨간색 적용
                
              }}>
                <Text fontSize="28px" color="#333333" margin="0 0 16px 0" style={{ lineHeight: 1.5, textAlign: 'center', wordBreak: 'keep-all' }}>
                  근로3권이 아닌<br/>
                  <strong style={{ color: '#e63946' }}>'일반적 행동자유권 및 결사의 자유'</strong>에<br/>
                  기초하므로 상대적으로 약한 권리임
                </Text>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e6394630', padding: '10px 16px', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
                  <Text fontSize="20px" color="#e63946" fontWeight="bold" margin="0" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                    헌재: 유니언 샵 보장을 위해 <strong>제한될 수 있음</strong>
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