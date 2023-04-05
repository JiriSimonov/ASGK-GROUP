import { SortMap } from '../models/sort-map.type';

export const sortMap: SortMap = {
  barcode: (a, b) => +b.barcode - +a.barcode,
  user_id: (a, b) => +b.user_id - +a.user_id,
  bonus: (a, b) => +b.bonus - +a.bonus,
  phone: (a, b) => +b.phone - +a.phone,
  discount: (a, b) => parseInt(b.discount, 10) - parseInt(a.discount, 10),
};
