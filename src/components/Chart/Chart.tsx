// components/DynamicHierarchyChart.js
import Image from "next/image";
import React from "react";

const DynamicHierarchyChart = ({ hierarchy }) => {
  const { ceo, managers, employees } = hierarchy;

  return (
    <div className="flex flex-col items-center bg-gray-100 p-10">
      {/* CEO */}
      <div className="text-center">
        <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-lg">
          <Image
            src={ceo.image}
            alt={ceo.name}
            className="w-32 h-32 rounded-full"
            width={200}
            height={200}
          />
          <div className="mt-2 font-semibold text-xl text-blue-700">
            {ceo.name}
          </div>
          <div className="text-gray-600">{ceo.role}</div>
        </div>
      </div>

      {/* Line to Managers */}
      <div className="flex justify-center mt-6">
        <div className="w-1 bg-gray-400 h-8"></div>
      </div>

      {/* Managers */}
      <div className="flex justify-center gap-16 mt-6">
        {managers.map((manager, index) => (
          <div className="text-center" key={index}>
            <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg shadow-lg">
              <Image
                src={manager.image}
                alt={manager.name}
                className="w-32 h-32 rounded-full"
                width={200}
                height={200}
              />
              <div className="mt-2 font-semibold text-xl text-green-700">
                {manager.name}
              </div>
              <div className="text-gray-600">{manager.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lines to Employees */}
      <div className="flex justify-between items-center mt-6 w-2/3 mx-auto">
        {employees.map((_, index) => (
          <div className="flex-1 flex justify-center" key={index}>
            <div className="w-1 bg-gray-400 h-8"></div>
          </div>
        ))}
      </div>

      {/* Employees */}
      <div className="flex justify-center gap-16 mt-6">
        {employees.map((employee, index) => (
          <div className="text-center" key={index}>
            <div className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg shadow-lg">
              <Image
                src={employee.image}
                alt={employee.name}
                className="w-32 h-32 rounded-full"
                width={200}
                height={200}
              />
              <div className="mt-2 font-semibold text-xl text-yellow-700">
                {employee.name}
              </div>
              <div className="text-gray-600">{employee.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicHierarchyChart;
