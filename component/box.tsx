"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/box.module.css";

interface Iprops {
  squareImage: string;
  name: string;
  netWorth: number;
  industries: string[];
  id: string;
}

export default function Box({
  squareImage,
  name,
  netWorth,
  industries,
  id,
}: Iprops) {
  const router = useRouter();
  const onClicked = () => {
    router.push(`/person/${id}`);
  };
  return (
    <div className={styles.box}>
      <li key={id}>
        <img src={squareImage} alt={name} onClick={onClicked} />
        <p>{name}</p>
        <p>
          {(netWorth / 1000).toFixed(0)} Billion / {industries}
        </p>
      </li>
    </div>
  );
}
