import Head from 'next/head'
import Link from 'next/link'

export default function Home({posts}) {
  return (
    <div>
      Welcome to My Blog
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  )
}

/*
export const getServerSideProps = async() => {
  console.log('getServerSideProps');
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
  const posts = await res.json();
  return {
    props: {
      posts
    }
  }
}
*/
 
export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
  const posts = await res.json();
  return {
    props: {
      posts
    },
    revalidate: 20
  }
}