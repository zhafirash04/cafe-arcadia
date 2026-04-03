export default function ProductLoading() {
  return (
    <main className="min-h-screen bg-bg-dark">
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A87C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Back button skeleton */}
        <div className="h-5 w-48 bg-gray-800 rounded animate-pulse mb-8" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image skeleton */}
          <div className="relative">
            <div className="relative aspect-square rounded-sm overflow-hidden border border-primary/20 bg-gray-800 animate-pulse" />
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
          </div>

          {/* Right: Content skeleton */}
          <div>
            {/* Origin */}
            <div className="h-4 w-32 bg-gray-800 rounded animate-pulse mb-4" />

            {/* Name */}
            <div className="h-12 w-3/4 bg-gray-800 rounded animate-pulse mb-4" />

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-8 w-20 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
            </div>

            {/* Strength */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-5 w-5 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <div
                    key={idx}
                    className="w-6 h-2 rounded-full bg-gray-800 animate-pulse"
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 mb-8">
              <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
              <div className="h-5 w-5/6 bg-gray-800 rounded animate-pulse" />
              <div className="h-5 w-4/6 bg-gray-800 rounded animate-pulse" />
            </div>

            {/* Taste notes */}
            <div className="mb-8">
              <div className="h-4 w-24 bg-gray-800 rounded animate-pulse mb-3" />
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className="h-8 w-24 bg-gray-800 rounded-full animate-pulse"
                  />
                ))}
              </div>
            </div>

            {/* Button skeleton */}
            <div className="h-14 w-48 bg-gray-800 rounded animate-pulse" />
          </div>
        </div>

        {/* Lore & Brewing Section skeleton */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-800/50">
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className="bg-[#1a1614] border border-primary/10 rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-6 bg-gray-800 rounded animate-pulse" />
                <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
