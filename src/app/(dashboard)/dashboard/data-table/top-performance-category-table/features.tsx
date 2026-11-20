import {

  createSortedRowModel,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
} from "@tanstack/react-table"

export const features = tableFeatures({
  rowSortingFeature,
  // Row models (order matters: after their feature)
  sortedRowModel: createSortedRowModel(),
  // Register only the functions you use
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})