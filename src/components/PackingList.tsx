import { PackingListItem } from "../App";
import Item from "./Item";

interface PackingListProps {
  items: PackingListItem[];
}

function PackingList(props: PackingListProps) {
  const { items } = props;

  return (
    <ul className="list">
      {items.map((i) => (
        <Item {...i} key={i.id} />
      ))}
    </ul>
  );
}

export default PackingList;
