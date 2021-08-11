import styled, { css } from "styled-components";
import Button from "../components/Button";

export const condensedMedium = `GT America CM`;

export const white = "#FFFFFF";
export const black = "#06061B";
export const blackHover = "#070725";
export const navy = "#09092F";
export const mediumBlue = "#10104E";
export const mediumBlueHover = "#16166A";
export const grayBlue = "#161B44";
export const gray = "#B9BAC7";
export const blueHover = "#42DDFF";

export const FlexDiv = styled.div`
  display: flex;
`;

export const FlexDivCentered = styled(FlexDiv)`
  align-items: center;
`;

export const FlexDivCol = styled(FlexDiv)`
  flex-direction: column;
`;

export const FlexDivColCentered = styled(FlexDivCol)`
  align-items: center;
`;

export const FlexDivRow = styled(FlexDiv)`
  justify-content: space-between;
`;

export const FlexDivRowCentered = styled(FlexDivRow)`
  align-items: center;
`;

export const UpperCased = styled.span`
  text-transform: uppercase;
`;

export const resetButtonCSS = css`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`;
