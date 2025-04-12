import BlogsDetailPageView from "@/views/BlogsPageView/BlogsDetailPageView";

export default async function BlogsDetailPage({ params }) {
  const { slug } = await params;

  return <BlogsDetailPageView slug={slug} />;
}
