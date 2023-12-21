export function Skeleton() {
  return (
    <ul className="flex animate-pulse flex-wrap items-start justify-center gap-8 xl:justify-between">
      {[...Array(50)].map((_, index) => (
        <li key={index} className="flex flex-col">
          <div className="h-[200px] w-[200px] rounded-lg bg-gray-200"></div>
          <div className="mt-4 flex flex-col justify-start gap-2">
            <p className="h-[14px] w-[200px] rounded-md bg-gray-200"></p>
            <p className="h-[10px] w-[100px] rounded-md bg-gray-200"></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
