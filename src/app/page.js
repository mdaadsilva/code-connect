import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Styles from "./page.module.css";

// const post = {
  
// }

async function getAllPost() {
 const response = await fetch('http://localhost:3042/posts')
 if(!response.ok){
  logger.error('Ops. alguma coisa ocorreu mal')
  return []
 }
 logger.info('Posts carregados com sucesso')
  return response.json() 
}

export default async function Home() {
  const posts = await getAllPost()
  return (
    <main className={Styles.postsContainer}>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
