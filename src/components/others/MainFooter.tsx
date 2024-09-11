import { apiGet } from "@/src/api/apiCalles";
import { TProduct } from "@/src/types";

export default async function MainFooter() {
  const product = await apiGet<TProduct>(`products/${180}`);
  const backgroundImages = product.images;

  return (
    <footer className="flex justify-center items-center w-full mb-9">
      <div className="h-[458px] w-full xs:max-h-full max-w-[1780px] relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-center">
          footer stuff here
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 h-full">
          {backgroundImages?.map((imageUrl, index) => (
            <div
              key={index}
              className="xs:h-[272px] h-full w-full bg-100-100 bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          ))}
        </div>
        {/* Your content goes here */}
      </div>
    </footer>
  );
}
