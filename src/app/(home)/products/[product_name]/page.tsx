import type { Metadata, ResolvingMetadata } from "next";
import "../../home.css";
import GridCard from "@/src/components/_shared/others/GridCard";
import BackButton from "@/src/components/_shared/button/BackButton";
import Image from "next/image";
import ConditionalRender from "@/src/components/_shared/Conditional/ConditionalRender";

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
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <BackButton />
          <h3 className="text-3xl font-bold my-2">
            {decodeURIComponent(productName)}
          </h3>
        </div>
        <ConditionalRender
          condition={!!searchParams?.image}
          Component={
            <div className="w-full !h-[250px] mb-4">
              <Image
                alt="Mountains"
                src={String(searchParams?.image)}
                blurDataURL={String(searchParams?.image)}
                placeholder="blur"
                quality={100}
                width={3000}
                height={200}
                className="w-full !h-[250px]"
                // fill
                // sizes="100vw"
                style={
                  {
                    // objectFit: "",
                    // backgroundRepeat: "repeat-x",
                  }
                }
              />
            </div>
          }
        />
        <GridCard />
      </div>
    </section>
  );
}
