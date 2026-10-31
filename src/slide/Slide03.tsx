import React from "react";
import { Heading, Grid, Text } from "spectacle";
import { CustomCard } from "../components/CustomCard";
import { LeviathanSlide } from "../components/LeviathanSlide";

export const Slide03 = () => {
  return (
    <LeviathanSlide>
      <Heading margin="0px 0px 40px 0px" fontSize="110px" color="primary">
        <i>유니언 샵 조항</i>
      </Heading>

      <Grid gridTemplateColumns="1fr 1fr" gridGap={40} width="85%">
        <CustomCard 
          style={{ 
            height: "300px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            padding: "20px"
          }}
        >
          <Text fontWeight="bold" fontSize="36px" color="primary" margin="0px 0px 16px 0px">
            헌법 제33조 제1항
          </Text>
          <Text
            fontSize="22px"
            color="secondary"
            style={{
              wordBreak: 'keep-all',
              lineHeight: 1.5,
              textAlign: 'center'
            }}
          >
            근로자의 적극적 단결권 및<br />
            노동조합의 집단적 단결권 보장
          </Text>
        </CustomCard>

        <CustomCard 
          style={{ 
            height: "300px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            padding: "20px"
          }}
        >
          <Text fontWeight="bold" fontSize="36px" color="primary" margin="0px 0px 16px 0px">
            평등의 원칙
          </Text>
          <Text
            fontSize="22px"
            color="secondary"
            style={{
              wordBreak: 'keep-all',
              lineHeight: 1.5,
              textAlign: 'center'
            }}
          >
            지배적 노조와 소수 노조 간<br />
            차별의 합리적 이유 존재 여부
          </Text>
        </CustomCard>
      </Grid>
    </LeviathanSlide>
  );
};