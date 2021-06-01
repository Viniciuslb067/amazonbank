import { useEffect, useState } from "react";
import { cpf } from "cpf-cnpj-validator";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "./styles.module.scss";

export function Register() {
  const [getCPF, setGetCPF] = useState();
  const [isValidCPF, setIsValidCPF] = useState(true);
  const [disabled, setDisabled] = useState();

  console.log(disabled)
  console.log(getCPF)
  console.log(cpf.isValid(getCPF))

  useEffect(() => {
    async function verify() {
      if (cpf.isValid(getCPF)) {
        setIsValidCPF(true);
        setDisabled(false)
      } else {
        setDisabled(true)
        setIsValidCPF(false);
      }
    }
    verify();
  }, []);

  return (
    <>
      <div className={styles.registerWrapper}>
        <div>
          <form action="#">
            <div>
              <h3>Peça sua conta e ajude a salvar nossa fauna</h3>
              <div>
                <label>
                  <input
                    placeholder="Digite seu CPF"
                    maxLength="11"
                    aria-invalid="true"
                    onChange={(e) => setGetCPF(e.target.value)}
                  />
                </label>
                {isValidCPF ? "" : <p> Precisamos de um CPF válido. </p>}
              </div>
              <button disabled={disabled}>
                <span>Continuar</span>
                <BsArrowRightShort size={25} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
