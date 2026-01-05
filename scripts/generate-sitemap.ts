import { promises as fs } from "fs"
import path from "path"

async function generateSitemap() {
  const baseUrl = "https://n8n.io" // Replace with your actual base URL
  const distDir = path.join(process.cwd(), "public")

  const manualEntries = [
    { url: "/", changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/pricing", changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/features", changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/integrations", changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/community", changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/blog", changefreq: "weekly", priority: 0.7, lastmod: new Date().toISOString().split("T")[0] },
    { url: "/use-cases", changefreq: "monthly", priority: 0.7, lastmod: new Date().toISOString().split("T")[0] },
    {
      url: "/n8n-vs-alternatives",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString().split("T")[0],
    },
    { url: "/n8n-for-teams", changefreq: "monthly", priority: 0.7, lastmod: new Date().toISOString().split("T")[0] },
    {
      url: "/blog/unlocking-workflow-automation-with-n8n",
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString().split("T")[0],
    },
  ]

  // Function to fetch all markdown files from a directory
  async function getMarkdownFiles(dir: string): Promise<string[]> {
    const files: string[] = []
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        files.push(...(await getMarkdownFiles(fullPath)))
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath)
      }
    }
    return files
  }

  // Example: Fetch blog post URLs from markdown files (adjust path as needed)
  // const blogPostDir = path.join(process.cwd(), 'content', 'blog');
  // const blogPostFiles = await getMarkdownFiles(blogPostDir);

  // const blogPostUrls = blogPostFiles.map(file => {
  //   const slug = path.basename(file, '.md'); // Extract slug from filename
  //   return {
  //     url: `/blog/${slug}`,
  //     changefreq: 'weekly',
  //     priority: 0.6,
  //     lastmod: new Date().toISOString().split('T')[0],
  //   };
  // });

  const allEntries = [...manualEntries] //, ...blogPostUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allEntries
        .map(
          (entry) => `
        <url>
          <loc>${baseUrl}${entry.url}</loc>
          <lastmod>${entry.lastmod}</lastmod>
          <changefreq>${entry.changefreq}</changefreq>
          <priority>${entry.priority}</priority>
        </url>
      `,
        )
        .join("")}
    </urlset>
  `

  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap)
  console.log("sitemap.xml generated successfully!")
}

generateSitemap().catch(console.error)
