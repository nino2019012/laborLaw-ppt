import React from 'react';
import { Slide, Heading, Box, OrderedList, ListItem, Appear } from 'spectacle';

export const Slide02 = () => {
  return (
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(/리바이어던.webp)"
      backgroundPosition="top center"
    >
      {/* Step 1: 첫 번째 클릭(또는 첫 동작) 시 배경 오버레이 및 제목 등장 */}
      <Appear activeStyle={{ opacity: 1 }} inactiveStyle={{ opacity: 0 }}>
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(245, 245, 247, 0.75)',
            transition: 'background-color 0.8s ease',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: '40px'
          }}
        >
          <Heading fontSize="80px" color="primary">
            <i>발표 목차</i>
          </Heading>

          <OrderedList color="primary" fontSize="45px" style={{ marginTop: '20px' }}>
            {/* Step 2: 두 번째 클릭 시 첫 번째 목차 등장 */}
            <Appear>
              <ListItem style={{ marginBottom: '16px' }}>
                <strong>판례 쟁점 소개</strong>
              </ListItem>
            </Appear>

            {/* Step 3: 세 번째 클릭 시 두 번째 목차 등장 */}
            <Appear>
              <ListItem style={{ marginBottom: '16px' }}>
                <strong>헌법재판소의 법리</strong>
              </ListItem>
            </Appear>

            {/* Step 4: 네 번째 클릭 시 세 번째 목차 등장 */}
            <Appear>
              <ListItem><strong>평석</strong></ListItem>
            </Appear>
          </OrderedList>
        </Box>
      </Appear>
    </Slide>
  );
};