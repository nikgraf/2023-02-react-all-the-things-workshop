import { useState } from "react";

type Props = {
  list: string[];
};

const SortableList: React.FC<Props> = ({ list }) => {
  const [sortOrder, setSortOrder] = useState<"up" | "down">("down");

  const entries = sortOrder === "down" ? list : list.reverse();

  return (
    <div>
      <button
        onClick={() =>
          setSortOrder((prevSortOrder) => {
            if (prevSortOrder === "up") {
              return "down";
            }
            return "up";
          })
        }
      >
        {sortOrder}
      </button>
      {entries.map((entry, index) => {
        return <div>{entry}</div>;
      })}
    </div>
  );
};

export default SortableList;
