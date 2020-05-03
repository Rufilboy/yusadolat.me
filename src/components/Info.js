import React from "react";
import styled from "styled-components";
import { useInfo } from "../hooks/useInfo";
import InfoItem from "./InfoItem";

const Info = () => {
  const info = useInfo();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Container>
        <InfoItem
          title="😊 Status"
          description={info.status}
          postfix={info.updatedAt}
        />
        <InfoItem title="⛏ Working on" description={info.company} />
        <InfoItem
          title="🚀 Contributions"
          description={`${info.totalContributions || 0} in the last year`}
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  min-width: 366px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 4px;
`;

export default Info;
