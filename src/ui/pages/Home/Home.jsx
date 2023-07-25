import { useTranslation } from "react-i18next"

const Home = () => {
  const {t} = useTranslation()
  return (
    <div>Home <h1>{ t("resumeConstructor")}</h1></div>
  )
}

export default Home