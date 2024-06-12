import { biografias } from '@/data/Biografias/biografias';

export const getBioById = (id) => {
  return biografias.find((bio) => bio.id === id);
};
export default getBioById;
