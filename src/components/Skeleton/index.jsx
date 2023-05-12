import { ItemSkeleton, ListSkeleton } from "./style";

export default function Skeleton() {
  return (
    <ListSkeleton className="skeleton_list">
      {[...Array(30)].map((_, index) => (
        <ItemSkeleton key={index} className="skeleton_list__item">
          <div className="image_container"></div>
          <div className="info_container">
            <p></p>
            <p></p>
          </div>
        </ItemSkeleton>
      ))}
    </ListSkeleton>
  );
}
