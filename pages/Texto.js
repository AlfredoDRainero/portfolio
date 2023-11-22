import styled from "styled-components";

<<<<<<< HEAD
const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;
  pointer-events: none;
  z-index: 5;
  display: flex;
  gap: 10px; /* Espacio entre las columnas */
`;

const ColumnLeft = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 24px;
  flex: 1; /* Ocupa todo el espacio disponible */
`;

const ColumnCenter = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  flex: 1; /* Ocupa todo el espacio disponible */
  opacity: 0.5;
`;

const ColumnRight = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  flex: 1; /* Ocupa todo el espacio disponible */
  opacity: 0.5;
  grid-template-columns: 2fr 0.2fr; /* Dos columnas de igual tamaño */
  gap: 10px; /* Espacio entre las columnas */
`;

const Row1 = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  //border: 1px solid black;
  font-family: "Sora", sans-serif;
  color: black;
  font-size: 50px;
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  a {
    //quita el espacio izq de la primera letra
    margin-left: -0.07em;
    margin-top: -0.2em;
  }
`;

const Row2 = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  //border: 1px solid black;
  font-family: "Sora", sans-serif;
  font-weight: bold;
  color: black;
  font-size: 300px;
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  a {
    //quita el espacio izq de la primera letra
    margin-left: -0.07em;
  }
`;

const Row3 = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  align-self: flex-end;
  //border: 1px solid black;
  font-family: "Sora", sans-serif;
  color: black;
  font-size: 20px;
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  a {
    //quita el espacio izq de la primera letra
    margin-bottom: -0.18em;
  }
`;

const Row4 = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-end;
  //border: 1px solid black;
  font-family: "Sora", sans-serif;
  color: black;
  font-size: 20px;
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: normal;
`;
const ChildColumn1 = styled.div`
padding: 40px;
display: flex; /* Utilizar flexbox */
   align-items: center; /* Centrar verticalmente los hijos */
  background-color: lightgray;
  //padding: 10px;
  height: 100%;
  font-size: 15px;
`;
const ChildColumn2 = styled.div`
  background-color: red;

  height: 100%;
  white-space: nowrap;
  a {
    margin-top: 2em;
  }
`;
/*color="orange" */
export function Underlay() {
  return (
    <Main>
      <ColumnLeft>
        <Row1>
          <a style={{ fontWeight: "bold", marginRight: "5px" }}>Rainero </a>
          <a>Alfredo</a>
        </Row1>
        <Row2>
          <a>D </a>
        </Row2>
        <Row3>
          <a>• Software Developer Specializing in Web, Mobile, and Desktop •</a>
        </Row3>
      </ColumnLeft>
      <ColumnCenter>
        <Row4>FROM 1997</Row4>
      </ColumnCenter>
      <ColumnRight color="blue">
        <ChildColumn1 >
          My current focus it's on implementation of React and its ecosystem, as
          well as React Native, JavaScript, Electron.js, and Node.js for the
          development of web, mobile, and desktop applications. Additionally, I
          have worked with various libraries such as Three.js,
          Styled-components, and Gsap, and have experience with multiple
          databases, including MySql, Sqlite3, Nedb, and dBase.
          <br/>
          Throughout more than a decade,I've worked with many different languages and platforms,
          ranging from Java (including Java for Android), Visual Basic, Delphi,
          Turbo C++, Builder C++, C++, to GLSL, ASM, HTML, CSS, Php, and
          Calypso. Along this journey, my involvement in challenging projects
          has significantly contributed to my professional growth. 
          <br/>
          My projects
          have been diverse, from creating code snippets for satellite image
          capture to developing games, study programs, statistical analysis, as
          well as creating mobile applications and websites.
        </ChildColumn1>
        <ChildColumn2>
          <a style={{ transform: "rotate(90deg)", display: "block" }}>
            About me •{" "}
          </a>
        </ChildColumn2>
      </ColumnRight>
    </Main>
  );
}

{
  /* <p style={{ fontWeight: "bold", backgroundColor: "blue" }}>Alfredo</p>
<p>Rainero</p>*/
}

export function Overlay() {
  return (
    <div style={{ position: "absolute", bottom: 40, right: 40 }}>
      <p
        style={{
          flex: "1 1 0%",
          fontSize: 12,
          lineHeight: "1em",
          textAlign: "right",
          color: "black",
        }}
      >
        <a href="http://pmnd.rs/">pmnd.rs</a>{" "}
        <a href="https://github.com/pmndrs">git</a>{" "}
        <a href="https://codesandbox.io/s/zxpv7">csb</a>
      </p>
    </div>
  );
}
=======
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
  
>>>>>>> c721396af9fc79024f30e91de3c771a5e9b1b312
