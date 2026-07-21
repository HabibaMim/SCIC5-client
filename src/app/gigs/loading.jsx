import GigCardSkeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div>
      <div className='text-4xl text-center pt-[60px] font-bold text-pink-500'>All Gigs</div>
      <GigCardSkeleton count={8} />
    </div>
  );
}