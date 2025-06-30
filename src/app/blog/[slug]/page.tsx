import { blogPosts } from "@/app/ui/blogs/blogs_lib";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; 
  const blog = blogPosts.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl text-black font-bold mb-4">{blog.title}</h1>
      <p className="text-black text-sm mb-2">
        {blog.category} - {blog.date}
      </p>
      <Image
        width={800}
        height={400}
        src={blog.img}
        alt={blog.title}
        className="w-full rounded mb-6"
      />
      <p className="text-lg leading-relaxed text-black">{blog.excerpt}</p>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
