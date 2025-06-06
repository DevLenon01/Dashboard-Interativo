export default function Card({ title, value }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  )
}