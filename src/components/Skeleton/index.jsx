export function Skeleton() {
  return (
    <ul className="m-auto flex animate-pulse flex-wrap items-start sm:justify-center sm:gap-8 xl:justify-between">
      {[...Array(50)].map((_, index) => (
        <li
          key={index}
          className="flex items-center gap-4 px-8 py-3 sm:flex-col sm:gap-0 sm:px-0 sm:py-0"
        >
          <div className="h-[64px] w-[64px] rounded-lg bg-gray-200 dark:bg-gray-400 sm:h-[200px] sm:w-[200px]"></div>
          <div className="flex flex-col justify-start gap-2 sm:mt-4 sm:flex">
            <p className="h-[14px] w-[120px] rounded-md bg-gray-200 dark:bg-gray-400 sm:w-[200px]"></p>
            <p className="h-[10px] w-[56px] rounded-md bg-gray-200 dark:bg-gray-400 sm:w-[100px]"></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
