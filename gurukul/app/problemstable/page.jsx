// components/ProblemsTable.jsx
"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ProblemsTable = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:m3qoN9RM/lcdb');
        const data = await response.json();
        setProblems(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch problems:", error);
      }
    };

    fetchProblems();
  }, []);

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="min-w-full  min-h-full p-6 max-w-md mx-auto bg-white rounded-xl shadow-md items-center ">
      <div className="flex-shrink-0">
        {/* Your gradient border goes here */}
        <div className="p-5 border-4 border-gradient rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acceptance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {problems.map((problem) => (
                <tr key={problem.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/problem/${problem.id}`} className="text-blue-600 hover:text-blue-800">
                      {problem.Title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{problem.Difficulty}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{problem.Tags}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{problem.Acceptance}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/problem/${problem.id}`} className="text-white bg-green-500 hover:bg-green-700 px-4 py-2 rounded">
                        Solve
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProblemsTable;