import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Styles from "./page.module.css";
import Link from "next/link";

const TOTAL_PAGES = 3;

async function getAllPost(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`, {
    cache: "no-store"
  });

  if (!response.ok) {
    logger.error("Erro ao buscar posts.");
    return { data: [], prev: null, next: null };
  }

  const json = await response.json();
  const currentPage = parseInt(page, 10);

  return {
    data: json.data,
    prev: currentPage > 1 ? currentPage - 1 : null,
    next: currentPage < TOTAL_PAGES ? currentPage + 1 : null
  };
}

export default async function Home({ searchParams }) {
  const CurrentPage = parseInt(searchParams?.page || "1", 10);
  const { data: posts, prev, next } = await getAllPost(CurrentPage);

  return (
    <main className={Styles.postsContainer}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}

      <div className={Styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
