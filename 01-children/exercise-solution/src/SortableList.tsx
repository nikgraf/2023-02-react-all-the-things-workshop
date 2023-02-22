import { Children, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const SortableList: React.FC<Props> = ({ children }) => {
  const [sortOrder, setSortOrder] = useState<"up" | "down">("down");

  const entries =
    sortOrder === "down"
      ? Children.toArray(children)
      : Children.toArray(children).reverse();

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
        return entry;
      })}
    </div>
  );
};

export default SortableList;
