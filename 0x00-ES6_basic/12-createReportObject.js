export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    employeesList: (allEmployees) => Object.keys(allEmployees).length,
  }

  return reportObject;
}
