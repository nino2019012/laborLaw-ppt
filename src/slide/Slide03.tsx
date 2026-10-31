import React from "react";
import { Slide, FlexBox, Heading, Grid, Text } from "spectacle";
import { CustomCard } from "../components/CustomCard";

export const Slide03 = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px 0px 20px 0px" fontSize="130px">
          <i>유니언 샵 조항</i>
        </Heading>

        <Grid gridTemplateColumns="1fr 1fr" gridGap={40} width="85%">
          <CustomCard flex={1} height="300px">
            <Text fontWeight="bold" fontSize="40px" color="primary">
              헌법 제33조 제1항
            </Text>
            <Text
              fontSize="20px"
              color="secondary"
              marginTop="12px"
              style={{
                wordBreak: 'keep-all',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}
            >
              근로자의 적극적 단결권 및<br />
              노동조합의 집단적 단결권 보장
            </Text>
          </CustomCard>

          <CustomCard flex={1} height="300px">
            <Text fontWeight="bold" fontSize="40px" color="primary">
              평등의 원칙
            </Text>
            <Text
              fontSize="20px"
              color="secondary"
              marginTop="12px"
              style={{
                wordBreak: 'keep-all',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}
            >
              지배적 노조와 소수 노조 간<br />
              차별의 합리적 이유 존재 여부
            </Text>
          </CustomCard>
        </Grid>
      </FlexBox>
    </Slide>
  );
};