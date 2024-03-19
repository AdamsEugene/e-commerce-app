type PROPS = {
  firstComponent: React.ReactNode;
  secondComponent: React.ReactNode;
  isEqualSize?: boolean;
  reverse?: boolean;
};

export default function PlacedSideBySide(props: PROPS) {
  const { firstComponent, secondComponent, isEqualSize, reverse } = props;
  if (isEqualSize && reverse) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <>{secondComponent}</>
        <>{firstComponent}</>
      </div>
    );
  }
  if (isEqualSize) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <>{firstComponent}</>
        <>{secondComponent}</>
      </div>
    );
  }
  if (reverse) {
    return (
      <div className="flex gap-4 flex-row-reverse">
        <div className="flex-1">{firstComponent}</div>
        <div className="w-[430px]">{secondComponent}</div>
      </div>
    );
  }
  return (
    <div className="flex gap-4">
      <div className="flex-1">{firstComponent}</div>
      <div className="w-[430px]">{secondComponent}</div>
    </div>
  );
}
