import ItemDetailSection from "./item-detail-section"
import RestockSection from "./restock-section"

const people = [
  { name: 'Skyworth ONT', title: 'ONT', email: '200', role: 'Headend' },
  // More people...
]

export default function InventoryTable() {
  return (

    <div className="-mx-4 mt-8 p-8 sm:-mx-0 bg-white rounded-md shadow-md">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Item Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Clasification
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Stock
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Action
            </th>

          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {people.map((person) => (
            <tr key={person.email}>
              <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {person.name}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only">Title</dt>
                  <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                  <dt className="sr-only sm:hidden">Email</dt>
                  <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.email}</dd>
                </dl>
              </td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.title}</td>
              <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.email}</td>
              <td className="flex py-4 text-sm font-medium sm:pr-0 ">
                <ItemDetailSection />
                <span className="hidden sm:inline"> | </span>
                <RestockSection />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
