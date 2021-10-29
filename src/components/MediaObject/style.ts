import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
`;

export const ContentText = styled.h3`
  font-size: 14px;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 60px;
  margin-right: 12px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

export const CreatedAt = styled.div`
  flex: 0 0 100%;
  font-size: 12px;
  text-align: right;
  color: gray;
`;
