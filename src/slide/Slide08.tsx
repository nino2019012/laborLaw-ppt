import React, { useState } from "react";
import { Heading, Grid, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide08 = () => {
  // 카드 상세 정보 전환 상태 관리
  const [showDetail, setShowDetail] = useState(false);
  
  // 💡 호버 상태 정상 복구
  const [isHovered, setIsHovered] = useState(false);

  // 테마 색상 (딥 바이올렛 & 파스텔 베이지)
  const PRIMARY_COLOR = "#5c4d7d"; 
  const BG_COLOR = "#f4f1ea";      

  return (
    <LeviathanSlide>
      <Heading margin="20px 0px 20px 0px" fontSize="50px" color="primary">
        헌재 반대의견의 논리
      </Heading>

      <Appear>
        <Grid 
          gridTemplateColumns="1fr" 
          width="80%" 
          height="480px"
          style={{ margin: '0 auto' }}
        >
          {/* 💡 호버 이벤트 핸들러 정상 작동 배치 */}
          <div 
            onClick={() => setShowDetail(!showDetail)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: isHovered ? '0 12px 24px rgba(92, 77, 125, 0.2)' : 'none',
              borderRadius: '16px'
            }}
          >
            {!showDetail ? (
              /* [앞면] 반대의견 문제의식 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 40px',
                boxSizing: 'border-box',
                borderTop: `6px solid ${PRIMARY_COLOR}`,
                backgroundColor: '#ffffff'
              }}>
                <Text fontSize="40px" fontWeight="bold" color={PRIMARY_COLOR} margin="0 0 16px 0" style={{ textAlign: 'center', lineHeight: 1.4, wordBreak: 'keep-all' }}>
                  근로자의 선택권과 단결하지 않을 자유는<br />정말 배제되어야 하는가?
                </Text>

                <Text fontSize="20px" color="secondary" margin="0" style={{ textAlign: 'center', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  헌법 제33조 제1항의 근본적 취지에 대한 재해석
                </Text>

                <Text fontSize="14px" color={PRIMARY_COLOR} margin="32px 0 0 0" fontWeight="bold">
                  click
                </Text>
              </CustomCard>
            ) : (
              /* [뒷면] 파스텔 베이지 (#f4f1ea) 배경 - 반대의견 법리 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '32px 40px',
                boxSizing: 'border-box',
                backgroundColor: BG_COLOR,
                border: `2px solid ${PRIMARY_COLOR}`
              }}>
                <Text fontSize="30px" color="#333333" margin="0 0 20px 0" style={{ lineHeight: 1.6, textAlign: 'center', wordBreak: 'keep-all' }}>
                  헌법 제33조 제1항은 근로자의 <strong style={{ color: PRIMARY_COLOR }}>생존권을 확보</strong>하고<br/>
                  <strong style={{ color: PRIMARY_COLOR }}>경제적 지위를 향상</strong>시키기 위한 것이며,<br/>
                  근로자에게 <strong style={{ color: PRIMARY_COLOR }}>단결하지 아니할 자유</strong> 역시 헌법상 보장됨
                </Text>

                <div style={{ backgroundColor: '#ffffff', border: `1px solid ${PRIMARY_COLOR}40`, padding: '14px 24px', borderRadius: '8px', width: '90%', boxSizing: 'border-box' }}>
                  <Text fontSize="20px" color={PRIMARY_COLOR} fontWeight="bold" margin="0" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                    💡 일방적인 단결 강제(유니언 샵)는 근로자의 헌법상 자유를 침해함
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