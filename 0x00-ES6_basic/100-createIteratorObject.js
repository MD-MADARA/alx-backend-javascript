export default function createIteratorObject(report) {
  let arr = [];
  for (const employeesList of Object.values(report.allEmployees)) {
    arr = [...employeesList, ...arr];
  }

  return arr;
}
