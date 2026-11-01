import React, { useState } from 'react';
import { Heading, Text, Grid, Appear } from 'spectacle';
import { CustomCard } from '../components/CustomCard';
import { LeviathanSlide } from '../components/LeviathanSlide';

export const Slide06 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <LeviathanSlide>
      <Heading margin="40px 0px 30px 0px" fontSize="70px" color="primary">
        헌법재판소의 법리
      </Heading>

      <Appear>
        <Grid 
          gridTemplateColumns="1fr" 
          width="85%" 
          height="450px"
          style={{ 
            position: 'relative',
            margin: '0 auto'
          }}
        >
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              width: '100%',
              height: '100%',
              perspective: '1000px',
              cursor: 'pointer'
            }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.8s',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}>
              
              {/* [앞면] 조문 카드 */}
              <CustomCard style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                boxSizing: 'border-box'
              }}>
                <Text fontSize="30px" color="#e63946" fontWeight="bold" margin="0px 0px 30px 0px">
                  헌법 제33조 제1항
                </Text>
                <Text fontSize="32px" color="primary" style={{ lineHeight: 1.6, textAlign: 'center' }}>
                  "근로자는 근로조건의 향상을 위하여 자주적인<br/> <strong>단결권·단체교섭권 및 단체행동권</strong>을 가진다."
                </Text>
              </CustomCard>

              <CustomCard style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', // 💡 중앙 정렬로 시선 집중
                padding: '40px',
                textAlign: 'center',
                boxSizing: 'border-box'
              }}>
                <Text fontSize="50px" color="primary" fontWeight="bold" margin="0 0 24px 0" style={{ lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  오직 <span style={{ color: '#1d3557', backgroundColor: 'rgba(29, 53, 87, 0.1)', padding: '0 10px' }}>'적극적 단결권'</span>만을 명시
                </Text>

                <Text fontSize="30px" color="secondary" margin="0" style={{ lineHeight: 1.6, wordBreak: 'keep-all' }}>
                  노조에 가입하지 않을 <strong style={{ color: '#e63946' }}>소극적 단결권</strong>은 근로3권이 아닌<br/>
                  일반적 행동자유권(제10조) 및 결사의 자유(제21조)에 근거함
                </Text>
              </CustomCard>

            </div>
          </div>
        </Grid>
      </Appear>
    </LeviathanSlide>
  );
};