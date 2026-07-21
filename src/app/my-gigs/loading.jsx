import GigCardSkeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-base-100 px-6 md:px-20 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-10">
            My Gigs
          </h1>
      <GigCardSkeleton count={8} />
    </div>
  );
}