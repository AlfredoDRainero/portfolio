
import styled from 'styled-components';

const MainText = styled.div`
 position: absolute;
  z-index: 5;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

`;




const ContLeft = styled.div`
  //overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0;
  padding: 0;
  display: grid;
  background-color: blue;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    //background-color: black;
  }

`;

const ContMiddel = styled.div`
  //overflow: hidden;
  grid-column-start:2 ;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0;
  padding: 0;
  display: grid;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    //background-color: black;
  }

`;

const ContRight = styled.div`
  //overflow: hidden;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: 0;
  padding: 0;
  display: grid;
  background-color: red;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    //background-color: black;
  }

`;




export function Underlay() {
    return (

<MainText>
  <ContLeft></ContLeft>
  <ContMiddel></ContMiddel>
  <ContRight></ContRight>



</MainText>

    
    )
  }
  
  export function Overlay() {
    return (
      <div style={{ position: "absolute", bottom: 40, right: 40 }}>
        <p style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}>
          <a href="http://pmnd.rs/">pmnd.rs</a> <a href="https://github.com/pmndrs">git</a> <a href="https://codesandbox.io/s/zxpv7">csb</a>
        </p>
      </div>
    )
  }

  /*  <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "none",
          zIndex:5,
        }}>
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <p
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              height: 30,
              fontSize: 30,
              fontWeight: "700",
              lineHeight: "30px",
              color: "black",
              letterSpacing: -2,
            }}>
            POIMANDRES
          </p>
          <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
          <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right", color: "black" }}>⎑</p>
        </div>
        <div style={{ height: 60 }} />
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
            <b>Stones, Metals and Gems</b>
            <br />
            A Universal Deity
            <br />
            <b>—</b>
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
              transformOrigin: "right",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: "100%",
              textAlign: "right",
              color: "black",
              whiteSpace: "nowrap",
            }}>
            DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
          </p>
        </div>
        <div style={{ height: 10 }} />
        <div
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            width: "100%",
            flex: "1 1 0%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", color: "black", margin: 0, letterSpacing: -10 }}>X</p>
          <div style={{ width: 10 }} />
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>_01</p>
        </div>
        <div style={{ height: 60 }} />
        <div
          style={{
            pointerEvents: "all",
            pointer: "auto",
            width: "100%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
            <b>Wonders of Antiquity</b>
            <br />
            Pythagorean Mathematics
          </p>
          <div style={{ width: 10 }} />
          <p
            className="full"
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              fontSize: 16,
              fontWeight: "700",
              lineHeight: "1em",
              textAlign: "center",
              color: "black",
              letterSpacing: -0.5,
              whiteSpace: "nowrap",
            }}>
            THE SUMMIT OF THE MANY
          </p>
          <div style={{ width: 10 }} />
          <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
        </div>
          </div>*/
  