import styled from 'styled-components';

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: none;
  z-index: 5;
  //background-color: red;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: none;
  z-index: 5;
  //background-color: blue;
`;

const CenteredRow = styled.div`
  width: 100%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

const CenteredColumn = styled.div`
  width: 100%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: green;
`;

const RotatedPointer = styled.p`
  transform: rotate3d(0, 0, 1, 90deg) translate3d(100%, 10px, 0);
  transform-origin: right;
  font-size: 12px;
  font-weight: 700;
  line-height: 100%;
  text-align: right;
  color: black;
  white-space: nowrap;
  background-color: purple;
`;

const LargeText = styled.p`
  font-size: ${({ size }) => size || 'inherit'};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
  color: black;
  margin: 0;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'inherit'};
  background-color: aquamarine;

`;

const UnderlayContainer = styled.div`
  font-family: 'Antonio', sans-serif;
  width: 100%;
  flex: 1 1 0%;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  background-color: burlywood;
`;

export function Underlay () {
  return (
    <Main>
      <AbsoluteContainer>
        <CenteredRow>
          <LargeText size="30px" lineHeight="30px" letterSpacing="-2px">POIMANDRES</LargeText>
          <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
          <LargeText size="30px" lineHeight="30px" textAlign="right">⎑</LargeText>
        </CenteredRow>
        <div style={{ height: 60 }} />
        <CenteredColumn>
          <LargeText size="12px" lineHeight="1.5em">
            <b>Stones, Metals and Gems</b>
            <br />
            A Universal Deity
            <br />
            <b>—</b>
          </LargeText>
          <div style={{ width: 10 }} />
          <RotatedPointer>DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●</RotatedPointer>
        </CenteredColumn>
        <div style={{ height: 10 }} />
        <UnderlayContainer>
          <LargeText size="250px" lineHeight="1em" letterSpacing="-10px">X</LargeText>
          <div style={{ width: 10 }} />
          <LargeText size="250px" lineHeight="100%" textAlign="right" letterSpacing="-10px">_01</LargeText>
        </UnderlayContainer>
        <div style={{ height: 60 }} />
        <UnderlayContainer>
          <LargeText size="12px" lineHeight="1.5em">
            <b>Wonders of Antiquity</b>
            <br />
            Pythagorean Mathematics
          </LargeText>
          <div style={{ width: 10 }} />
          <LargeText size="16px" lineHeight="1em" letterSpacing="-0.5px">
            THE SUMMIT OF THE MANY
          </LargeText>
          <div style={{ width: 10 }} />
          <LargeText size="12px" lineHeight="1em"></LargeText>
        </UnderlayContainer>
      </AbsoluteContainer>
    </Main>
  );
};
  
  export function Overlay() {
    return (
      <div style={{ position: "absolute", bottom: 40, right: 40 }}>
        <p style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}>
          <a href="http://pmnd.rs/">pmnd.rs</a> <a href="https://github.com/pmndrs">git</a> <a href="https://codesandbox.io/s/zxpv7">csb</a>
        </p>
      </div>
    )
  }
  