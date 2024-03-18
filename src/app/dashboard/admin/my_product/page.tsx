import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Products",
};

export default function MyProducts() {
  return (
    <div className="home">
      <div className="main">MyProducts</div>
    </div>
  );
}
