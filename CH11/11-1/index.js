import { setOffAlarms } from "./alert";

export function alertForMiscreant(people) {
  if (findMiscreant(people)) setOffAlarms();
}

export function findMiscreant(people) {
  return people.find((p) => ["조커", "사루만"].includes(p)) || "";
}
