import { NextResponse } from 'next/server';

const generateRSSFeed = () => {
  // Replace with your blog data fetching logic
  const posts = [
    { title: "Post 1", slug: "post-1", date: "2024-01-01", content: "Content of Post 1" },
    { title: "Post 2", slug: "post-2", date: "2024-01-02", content: "Content of Post 2" },
  ];

  const rssItems = posts.map((post) => `
    <item>
      <title>${post.title}</title>
      <link>https://example.com/blog/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.content}</description>
    </item>
  `).join("");

  return `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>My Blog</title>
        <link>https://example.com</link>
        <description>Latest posts from my blog</description>
        ${rssItems}
      </channel>
    </rss>
  `;
};

export async function GET() {
  const rssFeed = generateRSSFeed();
  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
