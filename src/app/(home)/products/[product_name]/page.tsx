import type { Metadata, ResolvingMetadata } from "next";
import "../../home.css";
import GridCard from "@/src/components/GridCard";

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

  return {
    title: productName,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function Products(props: Props) {
  const { params } = props;
  const productName = params.product_name;

  return (
    <section className="w-full home">
      <div className="main flex flex-col justify-center items-center">
        <div className="w-full">
          <h3 className="text-3xl font-bold my-2">{productName}</h3>
        </div>
        <GridCard />
      </div>
    </section>
  );
}
