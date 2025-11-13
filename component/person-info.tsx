import styles from "@/styles/person-info.module.css";

interface Iprops {
  id: string;
}

interface FinancialAsset {
  ticker: string;
  numberOfShares: number;
  exerciseOptionPrice?: number | null;
}

interface Person {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  country?: string;
  industries?: string[];
  bio?: string | string[];
  financialAssets?: FinancialAsset[];
}

export async function getPerson(id: string): Promise<Person> {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  const data = await response.json();
  return data;
}

export default async function PersonInfo({ id }: Iprops) {
  const data = await getPerson(id);
  return (
    <>
      <div className={styles.container}>
        <img src={data.squareImage} alt={data.name} />
        <h2>{data.name}</h2>
        <p>Networth : {(data.netWorth / 1000).toFixed(0)} Billion</p>
        <p>Country : {data.country}</p>
        <p>Industry : {data.industries}</p>
        <p>{data.bio}</p>
      </div>
      <div className={styles.container}>
        <h2>Financial Assets</h2>
        <div className={styles.assets}>
          {data.financialAssets?.map((asset: FinancialAsset, i: number) => (
            <div className={styles.asset} key={i}>
              <p>Ticker : {asset.ticker}</p>
              <p>Shares : {asset.numberOfShares.toLocaleString()} </p>
              <p>
                {" "}
                {asset.exerciseOptionPrice
                  ? `Exercise Price : ${asset.exerciseOptionPrice}`
                  : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
