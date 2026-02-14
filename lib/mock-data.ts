import * as mockService from "@/services/mock-data";
import { BlogPost, BlogCategory, BlogTag, PropertyListing as MockProperty } from "@/types";

// Blog data helpers
export const getBlogPosts = (): BlogPost[] => mockService.getBlogPosts();
export const getBlogCategories = (): BlogCategory[] => mockService.getBlogCategories();
export const getBlogTags = (): BlogTag[] => mockService.getBlogTags();

// Get specific blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return getBlogPosts().find((post) => post.slug === slug);
};

// Get blog posts by category
export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return getBlogPosts().filter((post) =>
    post.categories.some((category) => category.slug === categorySlug)
  );
};

// Get blog posts by tag
export const getBlogPostsByTag = (tagSlug: string): BlogPost[] => {
  return getBlogPosts().filter((post) =>
    post.tags.some((tag) => tag.slug === tagSlug)
  );
};

// Get related posts (excluding current post)
export const getRelatedPosts = (
  currentPostId: string,
  limit: number = 3
): BlogPost[] => {
  const allPosts = getBlogPosts();
  return allPosts.filter((post) => post.id !== currentPostId).slice(0, limit);
};

// Dashboard data helpers
export const getDashboardData = () => mockService.getDashboardData();
export const getBMVAnalyses = () => mockService.getBMVAnalyses();
export const getBMVUsageStats = () => mockService.getBMVUsageStats();
export const getUserProfile = () => mockService.getMockUser("guest@example.com");
export const getSavedProperties = () => []; // Mock placeholder
export const getBookings = () => []; // Mock placeholder

// Property data helpers
export const getProperties = (): MockProperty[] => mockService.getMockProperties();
export const getPropertyBySlug = (slug: string): MockProperty | undefined => {
  return mockService.getMockProperty(slug);
};
export const getPropertyById = (id: string): MockProperty | undefined => {
  return mockService.getMockProperties().find((property) => property.id === id);
};

export const searchProperties = (query: string) => {
  const properties = getProperties();
  const lowercaseQuery = query.toLowerCase();

  return properties.filter(
    (property) =>
      property.title.toLowerCase().includes(lowercaseQuery) ||
      property.location.town.toLowerCase().includes(lowercaseQuery) ||
      property.location.fullAddress?.toLowerCase().includes(lowercaseQuery) ||
      property.description?.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProperties = (filters: {
  propertyType?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  location?: string;
}) => {
  let properties = getProperties();

  if (filters.propertyType) {
    properties = properties.filter(
      (p) => p.houseType === filters.propertyType
    );
  }
  if (filters.minPrice) {
    properties = properties.filter((p) => p.price >= filters.minPrice!);
  }
  if (filters.maxPrice) {
    properties = properties.filter((p) => p.price <= filters.maxPrice!);
  }
  if (filters.bedrooms) {
    properties = properties.filter((p) => p.functionalSpace.bedrooms >= filters.bedrooms!);
  }
  if (filters.bathrooms) {
    properties = properties.filter((p) => p.functionalSpace.bathrooms >= filters.bathrooms!);
  }
  if (filters.location) {
    properties = properties.filter((p) =>
      p.location.town.toLowerCase().includes(filters.location!.toLowerCase()) ||
      p.location.postcode.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  return properties;
};

// Search and filter helpers
export const searchBlogPosts = (query: string): BlogPost[] => {
  const posts = getBlogPosts();
  const lowercaseQuery = query.toLowerCase();

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) =>
        tag.name.toLowerCase().includes(lowercaseQuery)
      ) ||
      post.categories.some((category) =>
        category.name.toLowerCase().includes(lowercaseQuery)
      )
  );
};

// Pagination helper
export const paginatePosts = (
  posts: BlogPost[],
  page: number,
  limit: number
) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / limit),
    currentPage: page,
    hasNextPage: endIndex < posts.length,
    hasPreviousPage: page > 1,
  };
};
