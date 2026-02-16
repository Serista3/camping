import { Skeleton } from '../ui/skeleton';

export default function LoadingCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export const SkeletonCard = function () {
  return (
    <div>
      <Skeleton className="rounded-lg border h-50 mb-2" />
      <Skeleton className="rounded-lg border h-4 w-3/4 mb-2" />
      <Skeleton className="rounded-lg border h-4 w-2/4" />
    </div>
  );
};
