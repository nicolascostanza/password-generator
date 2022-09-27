import styles from "./app.module.css";
import { useState } from "react";
import checkimg from "./img/checkimg.png";
import uncheckimg from "./img/uncheckimg.png";

function App() {
  const [lengthPassword, setLengthPassword] = useState(8);
  const [mayusculas, setMayusculas] = useState(false);
  const [numeros, setNumeros] = useState(false);
  const [simbolos, setSimbolos] = useState(false);
  const [result, setResult] = useState("");
  const [textbtn, settextbtn] = useState("Copiar");
  function resultado() {
    const configuracion: any = {
      numeroDeCaracteres: lengthPassword,
      simbolos,
      numeros,
      mayusculas,
    };
    const caracteres: any = {
      numeros: "0 1 2 3 4 5 6 7 8 9",
      simbolos: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
      mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
      minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
    };

    let caracteresFinales: any = "";
    let password = "";

    for (let propiedad in configuracion) {
      if (configuracion[propiedad] === true) {
        caracteresFinales += caracteres[propiedad] + " ";
      }
    }

    caracteresFinales += caracteres.minusculas;
    caracteresFinales = caracteresFinales.trim();

    caracteresFinales = caracteresFinales.split(" ");

    for (let i = 0; i < configuracion.numeroDeCaracteres; i++) {
      password +=
        caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
    }

    setResult(password);
  }
  const copiarInfo = () => {
    settextbtn("Copiado !");
    let aux = document.createElement("input");
    aux.setAttribute("value", result);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    setTimeout(() => {
      settextbtn("Copiar");
    }, 2000);
  };

  return (
    <div className={styles.fondo}>
      <div className={styles.container}>
        <h2 className={styles.title}>Generador de Contraseñas</h2>
        <div className={styles.boxResult}>
          <h4 className={styles.subtitle}>Constraseña</h4>
          <h3 className={styles.resultText}>{result}</h3>
          <button className={styles.btnCopy} onClick={() => copiarInfo()}>
            {textbtn}
          </button>
        </div>
        <div>
          <label htmlFor="Length">Longitud de la contraseña</label>
          <div className={styles.box}>
            <p className={styles.tamanio}>{lengthPassword}</p>
            <input
              className={styles.inputRange}
              type="range"
              max={24}
              min={0}
              value={lengthPassword}
              onChange={(e) => setLengthPassword(parseInt(e.target.value))}
            />
          </div>
          <div className={styles.box}>
            <label htmlFor="">Incluir mayusculas ?</label>
            {mayusculas ? (
              <img
                className={styles.imgCheck}
                onClick={() => setMayusculas(!mayusculas)}
                src={checkimg}
                alt=""
              />
            ) : (
              <img
                className={styles.imgCheck}
                onClick={() => setMayusculas(!mayusculas)}
                src={uncheckimg}
                alt=""
              />
            )}
          </div>
          <div className={styles.box}>
            <label htmlFor="">Incluir numeros ?</label>
            {numeros ? (
              <img
                className={styles.imgCheck}
                onClick={() => setNumeros(!numeros)}
                src={checkimg}
                alt=""
              />
            ) : (
              <img
                className={styles.imgCheck}
                onClick={() => setNumeros(!numeros)}
                src={uncheckimg}
                alt=""
              />
            )}
          </div>
          <div className={styles.box}>
            <label htmlFor="">Incluir simbolos ?</label>
            {simbolos ? (
              <img
                className={styles.imgCheck}
                onClick={() => setSimbolos(!simbolos)}
                src={checkimg}
                alt=""
              />
            ) : (
              <img
                className={styles.imgCheck}
                onClick={() => setSimbolos(!simbolos)}
                src={uncheckimg}
                alt=""
              />
            )}
          </div>
        </div>
        <button className={styles.btnGenerar} onClick={() => resultado()}>
          Generar Password
        </button>
      </div>
    </div>
  );
}

export default App;
