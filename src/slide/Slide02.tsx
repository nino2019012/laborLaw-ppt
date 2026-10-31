import React from "react";
import { 
  Slide,
  Appear,
  Heading,
  FlexBox,
  UnorderedList,
  ListItem,
  CodeSpan
 } from "spectacle";

export const Slide02 = () => {
  return (
    <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Appear>
        <Heading
          fontSize="80px"
          color="primary"
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}
        >
          <i>발표 목차</i>
        </Heading>
      </Appear>

      <FlexBox
        height="100%"
        justifyContent="center"
        alignItems="center"
        paddingTop="80px"
      >
        <Appear>
          <UnorderedList
            border="2px solid #1d1d1f"
            borderRadius="12px"
            padding="20px 40px"
            fontWeight="bold"
          >
            <Appear>
              <ListItem>
                <CodeSpan>서론 및 쟁점 소개</CodeSpan>
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                <CodeSpan>심판대상 조항 및 헌법적 배경</CodeSpan>
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                <CodeSpan>헌법 제33조 제1항 위반 여부</CodeSpan>
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                <CodeSpan>평등원칙 위반 여부</CodeSpan>
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                <CodeSpan>반대의견의 논리</CodeSpan>
              </ListItem>
            </Appear>

            <Appear>
              <ListItem>
                <CodeSpan>반대논리 재반박</CodeSpan>
              </ListItem>
            </Appear>
          </UnorderedList>
        </Appear>
      </FlexBox>
    </Slide>
  );
};