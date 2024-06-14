// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";
// import { siteConfig } from "@/src/config/site";
// import { title, subtitle } from "@/src/components/primitives";
import HomeSwiper from "@/src/components/_shared/swiper/HomeSwiper";
import GridCard from "@/src/components/_shared/others/GridCard";
import BannerAdsDisplay from "@/src/components/_shared/advertisement/BannerAdsDisplay";
import ProductsGrid from "./products/components/ProductsGrid";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center !gap-8 pb-8 home">
      <div className="xs:h-[min(25rem,60vh)] h-[34rem] w-full max-w-[1780px]">
        <HomeSwiper />
      </div>
      <div className="container main flex flex-col items-center justify-center !gap-8">
        <ProductsGrid />
        <GridCard />
        <ProductsGrid reverse />
        <BannerAdsDisplay />
        <GridCard />
        <ProductsGrid />
        <BannerAdsDisplay />
        <GridCard />
        <ProductsGrid reverse />
      </div>
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
