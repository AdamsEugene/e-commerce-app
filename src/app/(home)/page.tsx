import ProductTiles from "@/src/components/others/ProductTiles";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center !gap-8 pb-8 home">
      <div className="container main flex flex-col items-center justify-center !gap-8">
        <ProductTiles showGrid />
      </div>
    </section>
  );
}
