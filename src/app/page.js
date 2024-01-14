import { Header } from '@/src/components/Header'
import Image from 'next/image'
import { allBlogs } from '../../.contentlayer/generated'


console.log(allBlogs)

export default function Home() {
  return (
   <Header />
  )
}
