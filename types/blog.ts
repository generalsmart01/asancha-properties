export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: any; // Editor.js output
    image?: string;
    author: BlogAuthor;
    categories: BlogCategory[];
    tags: BlogTag[];
    status: "draft" | "published" | "archived";
    publishedAt?: string;
    readingTime?: string;
    seo: BlogSEO;
    createdAt: string;
    updatedAt: string;
    descripyion?: string;
}

export interface BlogAuthor {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
    description?: string;
    color?: string;
}

export interface BlogTag {
    id: string;
    name: string;
    slug: string;
    description?: string; // Added description optional for consistency if needed
}

export interface BlogSEO {
    title: string;
    description: string;
    keywords: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    canonicalUrl?: string;
}
