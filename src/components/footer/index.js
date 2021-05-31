import Link from "next/link";

import { GiTreeBranch } from "react-icons/gi";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <>
      <footer className={styles.footerWrapper}>
        <div>
          <GiTreeBranch size={30} color="#fff" id="logoSvg" />
          <div className={styles.company}>
            <p>© 2021 &nbsp;&nbsp; Amazon Bank &nbsp;&nbsp; 20.451.454/0001-41 <br/></p>
          </div>
          <div className={styles.social}>
            <a href="https://pt-br.facebook.com/" target="_blank">
              <FaFacebookSquare size={30} color="#fff"/>
            </a>
            <a href="https://www.instagram.com/?hl=pt-br" target="_blank">
              <AiFillInstagram size={30} color="#fff"/>
            </a>
            <a href="https://br.linkedin.com/" target="_blank">
              <RiLinkedinBoxFill size={30} color="#fff"/>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FaTwitterSquare size={30} color="#fff" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
