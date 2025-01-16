import { FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi";
import LinkButton from "../components/parts/LinkButton";
import { Link, useParams } from "react-router";
import { useState } from "react";

export default function Person () {
  const personId = useParams().personId
  const [name, setName] = useState(() => {
    if (personId === "me") return "あなた"
    return "あたらしい人"
  });
  return (
    <div className="max-w-xl mx-auto min-h-screen flex flex-col">
      <div className="flex">
        <LinkButton to="/people" variant="link" icon>
          <FiChevronLeft />
        </LinkButton>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center gap-8">
        <div className="text-7xl">
          <FiUser />
        </div>
        <div className="w-full px-8">
          <input
            type="text" value={name} onChange={e => setName(e.target.value)}
            className="bg-gray-100 text-3xl rounded-lg text-center focus:text-left p-2 w-full" />
        </div>
      </div>
      <div className="p-8">
        <LinkButton to="./prays/new">いのる</LinkButton>
      </div>
      <div className="p-8">
        <div className="rounded bg-gray-100">
          <div className="p-2 text-center">
            最近の祈り
          </div>
          <Link className="flex px-1 items-center gap-2" to="./prays/1">
            <div className="flex-grow border-b py-1 pl-2">xxxx/xx/xx xx:xx</div>
            <div><FiChevronRight /></div>
          </Link>
          <Link className="flex px-1 items-center gap-2" to="./prays/1">
            <div className="flex-grow border-b py-1 pl-2">xxxx/xx/xx xx:xx</div>
            <div><FiChevronRight /></div>
          </Link>
          <Link className="flex px-1 items-center gap-2" to="./prays/1">
            <div className="flex-grow border-b py-1 pl-2">xxxx/xx/xx xx:xx</div>
            <div><FiChevronRight /></div>
          </Link>
        </div>
      </div>
    </div>
  )
}
