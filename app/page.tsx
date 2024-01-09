'use client'
import Image from 'next/image'
import cat from '@/public/images/cat.jpg'
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";
import exp from "constants";
import {Metadata} from "next";
import {useState} from "react";

// for lazy loading.
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(
    () => import('./components/HeavyComponent'),
    {
      ssr: false,
      loading: () => <p>loading...</p>
    }
)

export default function Home() {
  const [isVisible, setVisible] = useState(false)
  // const session = await getServerSession(authOptions)
  return (
      <main className="">
        {/*<h1>Hello {session && <span>{session.user!.name}</span>}</h1>*/}
        <Link href="/users">Users</Link>
        <ProductCard/>
        {/*<Image src={cat} alt="Cat picture"/>*/}

        <button
            onClick={() => setVisible(true)}
            className="btn"
        >Show Heavy</button>
        {isVisible && <HeavyComponent/> }

        {/* lazy loading a lib or module */}
        <button className="btn"
        onClick={async () => {
          const _ = (await import('lodash')).default;

          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'}
          ]
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);

        }}
        >OrderByLodash</button>

        <div className="relative mt-5 h-screen">
          <Image
              // src="https://bit.ly/react-cover" // "https://www.target.com
              src={cat}
              alt="react-cover"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width:1200) 50vw, 33vw"
              quality={100} // for background 100% best quality default= 75%
              priority
          />
        </div>

      </main>
  )
}

// export const metadata: Metadata = {
//   title: 'Home Page metadata',
//   description: 'This is the home page description for SEO'
// }

// for getting something from a database or an api.
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');
//   return {
//     title: 'product.title',
//     description: 'product.description'
//   }
// }