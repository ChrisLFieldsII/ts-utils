/** same as `Object.keys` */
export const getKeys = <T extends Record<string, unknown>>(obj: T) => {
  return Object.keys(obj) as (keyof T)[];
};

/** same as `Object.entries` */
export const getEntries = <T extends Record<string, unknown>>(obj: T) => {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
};

export const isEmpty = (array: unknown[]) => {
  return array.length === 0;
};

/** generate an empty array for mapping, etc */
export const generateArray = (length: number) => Array.from(new Array(length));

/** @desc get metadata for an item in an array like is first/last item */
export const getArrayItemMetadata = (array: any[], index: number) => {
  return {
    isFirst: index === 0,
    isLast: index === array.length - 1,
  };
};
