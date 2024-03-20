export default function ItemDetails({ params }: { params: string[] }) {
  console.log(params);

  if (Object.keys(params).length === 0) {
    return <div>Details</div>;
  }
  return <div>ItemDetails</div>;
}
