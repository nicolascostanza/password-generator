import styles from "./app.module.css";
import { useState } from "react";
import checkimg from "./img/checkimg.png";
import uncheckimg from "./img/uncheckimg.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [lengthPassword, setLengthPassword] = useState<number>(8);
  const [mayusculas, setMayusculas] = useState<boolean>(false);
  const [numeros, setNumeros] = useState<boolean>(false);
  const [simbolos, setSimbolos] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [textbtn, settextbtn] = useState<"Copiar" | "Copiado !">("Copiar");
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
    let caracteresFinales: string | string[] = "";
    let password: string = "";
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
    setTimeout(() => {
      settextbtn("Copiar");
    }, 2000);
  };

  return (
    <div className={styles.fondo}>
      <div className={styles.container}>
        <h2 className={styles.title}>Generador de Contraseñas</h2>
        <div className={styles.boxResult}>
          <h3 className={styles.resultText}>{result}</h3>
          <CopyToClipboard text={result}>
            <button onClick={copiarInfo} className={styles.btnCopy}>
              {textbtn}
            </button>
          </CopyToClipboard>
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
