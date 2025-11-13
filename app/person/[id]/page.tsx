import PersonInfo, { getPerson } from "@/component/person-info";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const person = await getPerson(id);
  return {
    title: person.name,
  };
}

export default async function person({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <PersonInfo id={id} />
    </div>
  );
}
