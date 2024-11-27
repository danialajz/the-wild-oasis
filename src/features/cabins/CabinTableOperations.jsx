import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

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
    </TableOperations>
  );
}

export default CabinTableOperations;
