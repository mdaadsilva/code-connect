import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Styles from "./page.module.css";
import Link from "next/link";

async function getAllPost(page) {
 const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
 if(!response.ok){
  logger.error('Ops. alguma coisa ocorreu mal')
  return []
 }
 logger.info('Posts carregados com sucesso')
  return response.json() 
}

export default async function Home() {
  const {data: posts, prev, next } = await getAllPost(1)
  return (
    <main className={Styles.postsContainer}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
      {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
      {next && <Link href={`/?page=${next}`}>Proxima página</Link>}
    </main>
  );
}
