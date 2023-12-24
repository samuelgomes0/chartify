/* eslint-disable react/prop-types */
export function SelectTimeRange({ setTimeRange }) {
  return (
    <select
      className="m-auto mb-8 block w-[200px] border-b-2 border-gray-500 bg-transparent py-1 text-center text-sm font-semibold text-gray-500 focus:border-indigo-600 focus:text-indigo-500 focus:outline-none dark:border-gray-200 dark:text-gray-200 dark:focus:border-indigo-500"
      onChange={(event) => {
        setTimeRange(event.target.value);
      }}
    >
      <option value="long_term">All Time</option>
      <option value="medium_term">Last 6 Months</option>
      <option value="short_term">Last 4 Weeks</option>
    </select>
  );
}
