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
          {/* ==================== 좌측: 적극적 단결권 (우위 / 특별법적 지위) ==================== */}
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
              /* [좌측 뒷면] 특별법적 지위 & 사회권적 성격 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                backgroundColor: '#eef2f7'
              }}>
                {/* 💡 특별법 지위 상단 강조 뱃지 */}
                <span style={{ 
                  fontSize: '35px', 
                  fontWeight: 'bold', 
                  color: '#ffffff', 
                  backgroundColor: '#1d3557', 
                  padding: '4px 14px', 
                  borderRadius: '20px', 
                  marginBottom: '16px' 
                }}>
                  특별법적인 지위
                </span>

                <Text fontSize="25px" color="#1d3557" margin="0 0 16px 0" style={{ lineHeight: 1.5, textAlign: 'center', wordBreak: 'keep-all' }}>
                  근로자의 <strong>사회적 보호기능</strong>을 담당하며,<br/>
                  <strong>사회권적 성격을 띤 자유권</strong>으로서 우선 보호됨
                </Text>
                
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #1d355730', padding: '12px 16px', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
                  <Text fontSize="19px" color="#1d3557" fontWeight="bold" margin="0" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                    헌재: 일반법에 우선하여 <strong>최우선 보호</strong>
                  </Text>
                </div>
              </CustomCard>
            )}
          </div>

          {/* ==================== 우측: 소극적 단결권 (일반법적 성격) ==================== */}
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
              /* [우측 뒷면] 일반법적 성격 & 보충적 자유권 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 24px',
                boxSizing: 'border-box',
                backgroundColor: '#fdf0f0'
              }}>
                {/* 💡 일반법 지위 상단 강조 뱃지 */}
                <span style={{ 
                  fontSize: '35px', 
                  fontWeight: 'bold', 
                  color: '#ffffff', 
                  backgroundColor: '#e63946', 
                  padding: '4px 14px', 
                  borderRadius: '20px', 
                  marginBottom: '16px' 
                }}>
                  일반법적인 보충 지위
                </span>

                <Text fontSize="25px" color="#333333" margin="0 0 16px 0" style={{ lineHeight: 1.5, textAlign: 'center', wordBreak: 'keep-all' }}>
                  헌법 제10·21조에 기초한<br/><strong>일반법적인 자유권</strong>이자
                  <strong> 보충적 자유권</strong>에 불과함
                </Text>
                
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e6394630', padding: '12px 16px', borderRadius: '8px', width: '100%', boxSizing: 'border-box' }}>
                  <Text fontSize="19px" color="#e63946" fontWeight="bold" margin="0" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                    헌재: 특별법적 우위 권리에 의해 <strong>제한 가능</strong>
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