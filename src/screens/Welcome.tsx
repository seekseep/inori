import LinkButton from "../components/parts/LinkButton";

export default function Welcome() {
  return (
    <div className="max-w-xl mx-auto p-8 min-h-screen flex flex-col">
      <div className="text-center text-2xl">
        いのり
      </div>
      <div className="flex flex-col justify-center items-center flex-grow text-5xl leading-loose">
        <div>いのることで</div>
        <div>世界を変える</div>
      </div>
      <div className="flex flex-col items-stretch">
        <LinkButton size="xl" to={"/people/me"}>
          はじめる
        </LinkButton>
      </div>
    </div>
  )
}
