import { CardPost } from "@/components/CardPost";

// const post = {
  
// }

async function getAllPost() {
 const response = await fetch('http://localhost:3042/posts')
 if(!response.ok){
  console.log('Error fetching posts')
 }
  return response.json() 
}

export default async function Home() {
  const posts = await getAllPost()
  return (
    <main>
      {posts.map(post => <CardPost key={post.id} post={post} />)}
    </main>
  );
}
