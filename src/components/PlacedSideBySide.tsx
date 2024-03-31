type Props = {
  firstComponent: React.ReactNode;
  secondComponent: React.ReactNode;
  isEqualSize?: boolean;
  reverse?: boolean;
  width?: number;
  oneThird?: boolean;
  className?: string;
};

const PlacedSideBySide: React.FC<Props> = ({
  firstComponent,
  secondComponent,
  isEqualSize = false,
  reverse = false,
  width = 440,
  oneThird = false,
  className = "",
}: Props) => {
  const renderEqualSize = isEqualSize ? (
    <>
      {reverse ? secondComponent : firstComponent}
      {reverse ? firstComponent : secondComponent}
    </>
  ) : null;

  const renderUnequalSize = (
    <>
      <div className="flex-1">{firstComponent}</div>
      <div className={`w-[${width}]`}>{secondComponent}</div>
    </>
  );

  const renderOneThird = (
    <div
      className={`grid grid-cols-3 gap-4 w-full ${
        reverse ? "grid-cols-1-2" : ""
      }`}
    >
      {reverse ? (
        <>
          <div className="col-span-2">{secondComponent}</div>
          <div className="col-span-1">{firstComponent}</div>
        </>
      ) : (
        <>
          <div className="col-span-1">{firstComponent}</div>
          <div className="col-span-2">{secondComponent}</div>
        </>
      )}
    </div>
  );

  return (
    <div
      className={`flex w-full ${
        isEqualSize ? "grid grid-cols-2 gap-4" : "gap-4"
      } ${reverse ? "flex-row-reverse" : ""} ${className}`}
    >
      {isEqualSize
        ? renderEqualSize
        : oneThird
        ? renderOneThird
        : renderUnequalSize}
    </div>
  );
};

export default PlacedSideBySide;
