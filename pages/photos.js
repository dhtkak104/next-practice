import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photosStyles from "../styles/Photos.module.css";
import Link from "next/link";

export default function Photos({photos}) {
  return (
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map(photo => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title} 
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=50`);
  const photos = await res.json();
  return {
    props: {
      photos
    }
  }
}