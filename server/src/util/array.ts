interface entityRow {
  id: number;
}

export function arrayToObjectById<T extends entityRow>(array: T[]): { [id: string]: T } {
  return array.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
}
