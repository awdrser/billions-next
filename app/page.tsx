import Box from "@/component/box";
import styles from "@/styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillions() {
  const data = await (await fetch(API_URL)).json();
  return data;
}

export default async function Home() {
  const data = await getBillions();

  return (
    <div className={styles.container}>
      {data.map((billion: any) => (
        <Box
          key={billion.id}
          id={billion.id}
          name={billion.name}
          industries={billion.industries}
          netWorth={billion.netWorth}
          squareImage={billion.squareImage}
        />
      ))}
    </div>
  );
}
