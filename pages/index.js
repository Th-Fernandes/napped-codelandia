import { useRouter } from "next/router"
import MainHeader from "../src/components/MainHeader/MainHeader"
import MostWatched from "../src/components/MostWatched/MostWatched"
import NapedApresentation from "../src/components/NapedApresentation/NapedApresentation"
import TopContend from "../src/components/TopContends/TopContend"
import Footer from "../src/components/Footer/Footer"

export default function Home() {
  const router = useRouter()

  return (
    <>
    <MainHeader />

    <main>
      <NapedApresentation/>
      <TopContend />
      <MostWatched />
    </main>
    
    <Footer />
    </>
  )
}
