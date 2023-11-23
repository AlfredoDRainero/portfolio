import styled, { keyframes } from 'styled-components';


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
  //opacity: 0.5;
`;

const ColumnRight = styled.div`
  background-color: ${({ color }) => color || "transparent"};
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  flex: 1; /* Ocupa todo el espacio disponible */
  //opacity: 0.5;
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
  //opacity: 0.5;
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
  padding-right: 40px;

  display: grid; /* Utilizar flexbox */
  align-items: start; /* Centrar verticalmente los hijos */
  // background-color: lightgray;
  //padding: 10px;
  height: 100%;
  font-size: 20px;
  color: gray;
  font-family: "Sora", sans-serif;
  border-right: 1px solid black;
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
        <ChildColumn1>
          Currently, I'm focused on working with React and its ecosystem, along
          with React Native, JavaScript, Electron.js, and Node.js for the
          development of web, mobile, and desktop applications

          <ParentContainer>
        <CircularImage>
            <Image
              src="/RETRATO.JPG"
              alt="Portrait"
              layout="fill"
              objectFit="cover"
            />
          </CircularImage>
          <CircularImage2 />
       
    
          </ParentContainer>
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

import Image from "next/image";


const ParentContainer = styled.div`

   align-self: center;
   justify-self: center;
  position: relative;
  width: 250px; /* Ajusta el tamaño del círculo */
  height: 250px; /* Ajusta el tamaño del círculo */
  top:-100px;
`;

const CircularImage = styled.div`
 filter: grayscale(100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%; /* Hace que el componente sea circular */
  overflow: hidden; /* Oculta cualquier contenido fuera del círculo */
  border: 10px solid lightgray; /* Agrega un borde rojo */
  box-sizing: border-box; /* Incluye el borde en el tamaño del componente */
  background-color: black;
  transition: filter 0.3s; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen para que llene el círculo */
  }
  
  &:hover {
    filter: grayscale(0%);
    
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const CircularImage2 = styled.div`
  position: absolute;
  top: -2px; /* Ajusta la posición de este círculo (puedes ajustarlo según lo necesites) */
  left: -2px; /* Ajusta la posición de este círculo (puedes ajustarlo según lo necesites) */
  width: 254px; /* Ajusta el tamaño del segundo círculo */
  height: 254px; /* Ajusta el tamaño del segundo círculo */
  border-radius: 50%; /* Hace que el componente sea circular */
  overflow: hidden; /* Oculta cualquier contenido fuera del círculo */
  //border: 10px solid black; /* Agrega un borde rojo */
  //box-sizing: border-box; /* Incluye el borde en el tamaño del componente */
  background: conic-gradient(from 0deg at 50% 50%, transparent 90%, black 90%);
  //opacity: 0.5;
  z-index: -1;
  animation: ${rotate} 10s linear infinite;
`;






{
  /* <p style={{ fontWeight: "bold", backgroundColor: "blue" }}>Alfredo</p>
<p>Rainero</p>*/
}

/*
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
          
          */

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
