import { Prodcut as TProdcut } from "../api/prodcut/Prodcut";

export const PRODCUT_TITLE_FIELD = "title";

export const ProdcutTitle = (record: TProdcut): string => {
  return record.title?.toString() || String(record.id);
};
