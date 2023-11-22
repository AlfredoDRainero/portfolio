import styled from "styled-components";

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
padding-left: 40px;
display: flex; /* Utilizar flexbox */
   align-items: start; /* Centrar verticalmente los hijos */
 // background-color: lightgray;
  //padding: 10px;
  height: 100%;
  font-size: 15px;
  font-family: "Sora", sans-serif;
`;
const ChildColumn2 = styled.div`
  //background-color: red;
  font-family: "Sora", sans-serif;
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
      <ColumnRight>
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
