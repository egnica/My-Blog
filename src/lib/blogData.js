const BLOG_DATA_URL =
  "https://raw.githubusercontent.com/egnica/new-nicholasegner.com/main/blog.json";

export const BLOG_REVALIDATE_SECONDS = 60;

function dateValue(post) {
  const value = post.published_time || post.date;
  const parsed = value ? new Date(value).getTime() : 0;
  return Number.isNaN(parsed) ? 0 : parsed;
}

function normalizePost(post, fallbackSlug) {
  const slug = post.slug || fallbackSlug;

  return {
    ...post,
    slug,
    live: post.live !== false && post.published !== false,
    hero_image: post.hero_image || post.hero?.src || post.meta_image || null,
    meta_image:
      post.meta_image || post.metaImage?.src || post.hero_image || post.hero?.src || null,
    keywords: post.keywords || post.schema?.keywords || post.tags || [],
    contentBlocks: Array.isArray(post.contentBlocks) ? post.contentBlocks : [],
    published_time: post.published_time || post.date || null,
    modified_time:
      post.modified_time || post.updated || post.published_time || post.date || null,
  };
}

export async function getBlogData() {
  const response = await fetch(BLOG_DATA_URL, {
    next: { revalidate: BLOG_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load shared blog data: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export async function getBlogPosts({ includeHidden = false } = {}) {
  const data = await getBlogData();

  return Object.entries(data)
    .map(([slug, post]) => normalizePost(post, slug))
    .filter((post) => includeHidden || post.live)
    .sort((a, b) => dateValue(a) - dateValue(b));
}

export async function getBlogPost(slug, { includeHidden = false } = {}) {
  const data = await getBlogData();
  const rawPost = data[slug];

  if (!rawPost) return null;

  const post = normalizePost(rawPost, slug);

  if (!includeHidden && !post.live) return null;

  return post;
}
