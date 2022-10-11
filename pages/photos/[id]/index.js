import Link from "next/link";

export default function index({photo}) {
  console.log(3);
  const {title, url} = photo;

  return (
    <div>     
        <h2>{title}</h2>
        <img
          src={url}
          style={{width:600, height:600}}
          alt={title} 
        />
        <Link href="/photos">
          <a>go back</a>
        </Link>
    </div>
  )
}

export const getStaticProps = async(context) => {
  console.log(2);
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`);
  const photo = await res.json();
  return {
    props: {
      photo
    }
  }
}

export const getStaticPaths = async() => {
  console.log(1);
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();
  const ids = photos.map(photo => photo.id);
  const paths = ids.map(id=>{
    return {
      params: {id: id.toString()}
    }
  });

  return {
    paths,
    fallback: false,
  }
}