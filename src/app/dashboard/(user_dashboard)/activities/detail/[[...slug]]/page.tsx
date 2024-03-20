export default function ActivitiesItemDetails({
  params,
}: {
  params: string[];
}) {
  console.log(params);

  if (Object.keys(params).length === 0) {
    return <div>Activities Details</div>;
  }
  return <div>Activities Item Details</div>;
}
