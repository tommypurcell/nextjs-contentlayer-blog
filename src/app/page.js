import { Header } from '@/src/components/Header'
import Image from 'next/image'
import { allBlogs } from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'


console.log(allBlogs)

export default function Home() {
  return (
    <>
      <Header />
      <HomeCoverSection blogs={allBlogs} />
    </>
  )
}
