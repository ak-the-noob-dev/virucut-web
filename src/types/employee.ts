export default interface EmployeeProps {
  name?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  employee_desc?: employeeDesc[];
  image: {
    url?: string;
    name?: string;
    alternativeText?: string;
  };
}

interface employeeDesc {
  id: number;
  desc: string;
}
