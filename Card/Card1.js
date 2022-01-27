import React from "react";
import styles from './Card.module.css'
import Image from "next/image";
import imgCode from '../../public/assets/img/imgCode.jpg'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={imgCode} layout="responsive" width="5917" height="3945" />
      </div>
      <div className={styles.cardDescription}>
        <h3>desciption de la card en dessous de l'image</h3>
        <p>20/10/2010</p>
      </div>
    </div>
  );
}

//css
  .card{
    width: 417px;
    height: 360px;
    border: 2px solid black;
    background: rgba(255, 210, 151, 0.376);
  }
  .cardImage{
    
  }
  .cardDescription{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
  }
  
