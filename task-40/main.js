const toCsv = function (table) {
  // Query all rows
  const rows = table.querySelectorAll("tr");

  return [].slice
    .call(rows)
    .map(function (row) {
      // Query all cells
      const cells = row.querySelectorAll("th,td");
      return [].slice
        .call(cells)
        .map(function (cell) {
          return cell.textContent;
        })
        .join(",");
    })
    .join("\n");
};
