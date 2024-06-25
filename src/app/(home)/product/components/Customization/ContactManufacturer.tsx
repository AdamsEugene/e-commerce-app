import React from "react";

export default function ContactManufacturer() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-lg font-bold">Advanced Customization</h2>
        <p className="text-sm text-default-500">
          Access detailed settings and advanced features to tailor your product
          to your exact needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-4 md:gap-4"></div>
    </div>
  );
}
