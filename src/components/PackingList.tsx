import { PackingListItem } from "../App";
import Item from "./Item";

interface PackingListProps {
  items: PackingListItem[];
  togglePacked: (id: number) => void;
}

function PackingList(props: PackingListProps) {
  const { items, togglePacked } = props;

  return (
    <ul className="list">
      {items.map((i) => (
        <Item item={i} togglePacked={togglePacked} key={i.id} />
      ))}
    </ul>
  );
}

export default PackingList;
