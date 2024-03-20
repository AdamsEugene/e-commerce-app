type Props = {
  firstComponent: React.ReactNode;
  secondComponent: React.ReactNode;
  isEqualSize?: boolean;
  reverse?: boolean;
};

const PlacedSideBySide: React.FC<Props> = ({
  firstComponent,
  secondComponent,
  isEqualSize = false,
  reverse = false,
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
      <div className={reverse ? "w-[440px]" : "w-[440px]"}>
        {secondComponent}
      </div>
    </>
  );

  return (
    <div
      className={`flex ${isEqualSize ? "grid grid-cols-2 gap-4" : "gap-4"} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {isEqualSize ? renderEqualSize : renderUnequalSize}
    </div>
  );
};

export default PlacedSideBySide;
