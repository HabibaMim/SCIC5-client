export const fetchGigs = async (
  searchTerm = '',
  category = '',
  minPrice = '',
  maxPrice = '',
  sortBy = '',
  page = '1',
  limit = '8'
) => {
  const params = new URLSearchParams();
  if (searchTerm) params.set('search', searchTerm);
  if (category) params.set('category', category);
  if (minPrice) params.set('minPrice', minPrice);
  if (maxPrice) params.set('maxPrice', maxPrice);
  if (sortBy) params.set('sortBy', sortBy);
  params.set('page', page);
  params.set('limit', limit);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs?${params.toString()}`);
  const data = await res.json();
  return data || { gigs: [], totalCount: 0, totalPages: 0, currentPage: 1 };
};

export const fetchFeaturedGigs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
  const data = await res.json();
  return data || [];
};