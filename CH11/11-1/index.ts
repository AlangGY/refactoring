import { setOffAlarms } from "./alert";

export function alertForMiscreant(people: string[]) {
  if (findMiscreant(people)) setOffAlarms();
}

export function findMiscreant(people: string[]) {
  return people.find((p) => ["조커", "사루만"].includes(p)) || "";
}
