export type Issue = {
  id?: string;
  title?: string;
  description?: string;
};

export type ServerResponse = {
  result: "ok" | "nok";
};
