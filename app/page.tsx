import AddForm from "./components/AddForm";
import ProductTable from "./components/ProductTable";

async function getData() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log("DATA:", data);

  return (
    <div className="p-10 w-full">
      <AddForm />
      <ProductTable data={data} />
    </div>
  );
}