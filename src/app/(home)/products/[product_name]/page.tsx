import type { Metadata, ResolvingMetadata } from "next";
import "../../home.css";
import GridCard from "@/src/components/_shared/others/GridCard";
import BackButton from "@/src/components/_shared/button/BackButton";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";
import ProductTiles from "@/src/components/others/ProductTiles";

type Props = {
  params: { product_name: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const productName = params.product_name;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const image = String(searchParams?.image) || "/some-specific-page-image.jpg";
  return {
    title: productName,
    openGraph: {
      images: [image, ...previousImages],
    },
  };
}

export default function Products(props: Props) {
  const { params, searchParams } = props;
  const productName = params.product_name;

  return (
    <section className="w-full home mb-4">
      <div className="flex flex-col justify-center items-center">
        <div className="main w-full">
          <BackButton />
          <ConditionalRender
            condition={!!!searchParams?.image}
            Component={
              <h3 className="text-3xl font-bold my-2">
                {decodeURIComponent(productName)}
              </h3>
            }
          />
        </div>
        <ConditionalRender
          condition={!!searchParams?.image}
          Component={
            <>
              <div
                className="relative w-[1780px] !h-[250px] mb-6 mt-2 !max-w-[1480px] bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${String(searchParams?.image)})`,
                  backgroundSize: "50% 100%",
                  backgroundRepeat: "repeat-x",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">
                    {decodeURIComponent(productName)}
                  </h1>
                  <p className="text-xl">And I'm a Photographer</p>
                </div>
              </div>
            </>
          }
        />
        <div className="main">
          <ProductTiles />
        </div>
      </div>
    </section>
  );
}
