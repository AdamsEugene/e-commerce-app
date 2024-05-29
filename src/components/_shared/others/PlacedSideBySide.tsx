type Props = {
  firstComponent: React.ReactNode;
  secondComponent: React.ReactNode;
  thirdComponent?: React.ReactNode;
  isEqualSize?: boolean;
  reverse?: boolean;
  width?: number;
  oneThird?: boolean;
  className?: string;
  numberOfCols?: number;
};

const PlacedSideBySide: React.FC<Props> = ({
  firstComponent,
  secondComponent,
  thirdComponent,
  isEqualSize = false,
  reverse = false,
  width = 440,
  oneThird = false,
  className = "",
  numberOfCols = 3,
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

  const renderGridWithEqualCols = (
    <div
      className={`grid grid-cols-${numberOfCols} gap-4 w-full ${
        reverse ? "flex-row-reverse" : ""
      } ${className}`}
    >
      {reverse ? (
        <>
          {thirdComponent}
          {secondComponent}
          {firstComponent}
        </>
      ) : (
        <>
          {firstComponent}
          {secondComponent}
          {thirdComponent}
        </>
      )}
    </div>
  );

  return thirdComponent && !oneThird ? (
    renderGridWithEqualCols
  ) : (
    <div
      className={`flex w-full xs:flex-col ${
        isEqualSize
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
          : "gap-4"
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
