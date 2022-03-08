import { useRouter } from "next/router"
import MainHeader from "components/MainHeader/MainHeader"
import MostWatched from "components/MostWatched/MostWatched"
import NapedApresentation from "components/NapedApresentation/NapedApresentation"
import TopContend from "components/TopContends/TopContend"
import Footer from "components/Footer/Footer"
import News from "components/News/News"

export default function Home() {
  const router = useRouter()

  return (
    <>
    <MainHeader />

    <main>
      <NapedApresentation />
      <TopContend/>
      <MostWatched />
      <News />
    </main>
    
    <Footer />
    </>
  )
}
