import React, { useState } from "react";
import { Heading, Grid, Text, Appear } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide10 = () => {
  // 앞/뒷면 전환 상태 (false = 앞면, true = 뒷면)
  const [showDetail, setShowDetail] = useState(false);
  // 뒷면 내부 근거 인덱스 (0, 1, 2)
  const [detailIndex, setDetailIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const PRIMARY_COLOR = "#2a9d8f"; 
  const BG_COLOR = "#e9f5f3";      

  // 3가지 재반박 근거 데이터
  const reasons = [
    {
      num: "01",
      title: "생존권 침해 직결의 부정\n(노조법 제81조 제2호 단서)",
      desc: "노동조합에서 제명된 것을 이유로 신분상 불이익 금지를 규정, \n자발적으로 노동조합을 탈퇴하거나 이에 가입하지 않는 경우로 한정"
    },
    {
      num: "02",
      title: "무임승차(Free-Rider) 방지와 사회적 정의",
      desc: "단체교섭의 혜택은 비조합원에게도 미침. \n혜택만 누리고 의무 부담을 거부하는 것은 사회적 형평에 어긋남"
    },
    {
      num: "03",
      title: "지배적 노조 요건의 비례성 (2/3 이상 대표)",
      desc: "오직 근로자의 2/3 이상을 대표하는 단결체에만 적용된다.\n친회사 성향의 노조를 통한 사용자의 노조 압박을 사전 차단"
    }
  ];

  // 다음 근거 보기 (오른쪽 화살표 ▶ 클릭 시 1 -> 2 -> 3 -> 1 순환)
  const handleNext = (e) => {
    e.stopPropagation(); // 카드 닫기 이벤트 전파 방지
    setDetailIndex((prev) => (prev + 1) % reasons.length);
  };

  // 앞면 카드를 클릭했을 때 뒷면으로 전환
  const handleFrontClick = () => {
    setShowDetail(true);
    setDetailIndex(0);
  };

  return (
    <LeviathanSlide>
      <Heading margin="-10px 0px 40px 0px" fontSize="50px" color="primary">
        평석 ② : 반대의견 재반박
      </Heading>

      <Appear>
        <Grid 
          gridTemplateColumns="1fr" 
          width="85%" 
          height="500px"
          style={{ margin: '-30px auto 0 auto' }}
        >
          <div 
            onClick={!showDetail ? handleFrontClick : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              height: '100%',
              width: '100%',
              cursor: showDetail ? 'default' : 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
              boxShadow: isHovered ? '0 12px 24px rgba(42, 157, 143, 0.2)' : 'none',
              borderRadius: '16px',
              boxSizing: 'border-box'
            }}
          >
            {!showDetail ? (
              /* [앞면] 앞면 디자인 유지 및 클릭 활성화 */
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
                <Text fontSize="40px" fontWeight="bold" color="#264653" margin="0 0 16px 0" style={{ textAlign: 'center', lineHeight: 1.4, wordBreak: 'keep-all' }}>
                  유니언 샵은 근로자의 생존권을 침해하지 않으며<br />
                  <span style={{ color: PRIMARY_COLOR }}>무임승차 방지와 형평성</span>을 위해 정당하다
                </Text>

                <Text fontSize="30px" color="secondary" margin="0" style={{ textAlign: 'center', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                  3가지 반박
                </Text>

                <Text fontSize="14px" color={PRIMARY_COLOR} margin="32px 0 0 0" fontWeight="bold">
                  click!
                </Text>
              </CustomCard>
            ) : (
              /* [뒷면] 중앙 정렬 + 단일 오른쪽 화살표(▶) + 확대 텍스트 */
              <CustomCard style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '32px 40px',
                boxSizing: 'border-box',
                backgroundColor: BG_COLOR,
                border: `2px solid ${PRIMARY_COLOR}`
              }}>
                {/* 상단: Stepper 인디케이터 및 ↩ 앞면으로 버튼 */}
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {reasons.map((_, idx) => (
                      <div 
                        key={idx}
                        style={{
                          width: idx === detailIndex ? '32px' : '10px',
                          height: '10px',
                          borderRadius: '5px',
                          backgroundColor: idx === detailIndex ? PRIMARY_COLOR : '#2a9d8f40',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                    <span style={{ fontSize: '15px', fontWeight: 'bold', color: PRIMARY_COLOR, marginLeft: '6px' }}>
                      근거 {detailIndex + 1} / 3
                    </span>
                  </div>

                  {/* 앞면으로 돌아가는 버튼 */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDetail(false);
                    }}
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: PRIMARY_COLOR,
                      fontWeight: 'bold',
                      fontSize: '14px',
                      cursor: 'pointer',
                      padding: '4px 8px'
                    }}
                  >
                    ↩ 앞면으로
                  </button>
                </div>

                {/* 중앙: 확대된 박스 + 우측 이동 화살표(▶) 단일 배치 */}
                <div style={{ 
                  display: 'flex', 
                  width: '100%', 
                  alignItems: 'center', 
                  gap: '20px', 
                  margin: 'auto 0' // 💡 상하 마진 auto로 완전한 수직 중앙 정렬
                }}>
                  {/* 중앙 내용 박스 (글자 크기 및 높이 확대) */}
                  <div style={{ 
                    backgroundColor: '#ffffff', 
                    borderLeft: `6px solid ${PRIMARY_COLOR}`, 
                    padding: '28px 32px', 
                    borderRadius: '14px', 
                    flexGrow: 1,
                    minHeight: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    boxSizing: 'border-box'
                  }}>
                    <Text fontSize="40px" fontWeight="bold" color={PRIMARY_COLOR} margin="0 0 12px 0"
                    style={{ whiteSpace: 'pre-line', lineHeight: 1.3 }}>
                      {reasons[detailIndex].num}. {reasons[detailIndex].title}
                    </Text>
                    <Text fontSize="30px" color="#264653" margin="0" style={{ lineHeight: 1.5, wordBreak: 'keep-all',whiteSpace: 'pre-line' }}>
                      {reasons[detailIndex].desc}
                    </Text>
                  </div>

                  {/* 오른쪽 화살표 (▶) 단일 버튼 */}
                  <button
                    onClick={handleNext}
                    style={{
                      backgroundColor: '#ffffff',
                      border: `2px solid ${PRIMARY_COLOR}`,
                      color: PRIMARY_COLOR,
                      borderRadius: '50%',
                      width: '52px',
                      height: '52px',
                      fontSize: '22px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      transition: 'transform 0.15s ease, background-color 0.2s ease'
                    }}
                  >
                    ▶
                  </button>
                </div>
              </CustomCard>
            )}
          </div>
        </Grid>
      </Appear>
    </LeviathanSlide>
  );
};