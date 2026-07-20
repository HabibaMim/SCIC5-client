export const fetchGigs = async (
  search = '',
  category = '',
  minPrice = '',
  maxPrice = '',
  sortBy = '',
  page = '1',
  limit = '8'
) => {
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  if (minPrice) params.set('minPrice', minPrice);
  if (maxPrice) params.set('maxPrice', maxPrice);
  if (sortBy) params.set('sortBy', sortBy);
  params.set('page', page);
  params.set('limit', limit);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gigs?${params.toString()}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch gigs: ${res.status}`);
    }

    const data = await res.json();
    return data || { gigs: [], totalCount: 0, totalPages: 0, currentPage: 1 };
  } catch (error) {
    console.error('fetchGigs error:', error);
    return { gigs: [], totalCount: 0, totalPages: 0, currentPage: 1 };
  }
};

export const fetchFeaturedGigs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch featured gigs: ${res.status}`);
    }

    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error('fetchFeaturedGigs error:', error);
    return [];
  }
};