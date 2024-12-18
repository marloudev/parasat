import React from 'react'

export default function Table({ columns = [], data = [], className = "" }) {
    return (
        <div className={`overflow-x-auto rounded-lg border ${className}`}>
            <table className="min-w-full bg-white text-sm text-gray-700 border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 text-left font-semibold text-gray-700 border-b"
                            >
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="even:bg-gray-50 hover:bg-gray-100">
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-4 py-2 border-b whitespace-nowrap"
                                >
                                    {col.render ? col.render(row[col.dataKey], row) : row[col.dataKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
