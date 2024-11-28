import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFeild="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "wish-discount", label: "Wish Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", labe: "Sort By name (A-Z)" },
          { value: "name-desc", label: "Sort By name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (low first)" },
          { value: "regularPrice-desc", label: "Sort By Price (hight first)" },
          { value: "maxCapacity-asc", label: "Sort By capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort By capacity (hight first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
