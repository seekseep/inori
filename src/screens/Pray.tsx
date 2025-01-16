import { FiChevronLeft } from "react-icons/fi";
import LinkButton from "../components/parts/LinkButton";
import { useParams } from "react-router";

export default function Pray () {
  const personId = useParams().personId;
  return (
    <div className="max-w-xl mx-auto min-h-screen flex flex-col">
      <div className="flex">
        <LinkButton to={`/people/${personId}`} variant="link" icon>
          <FiChevronLeft />
        </LinkButton>
        <div className="flex-grow flex flex-col justify-center items-center mr-12">
          <div>
            あなたへの祈り
          </div>
        </div>

      </div>
      <div className="flex flex-col space-y-4 px-4 py-8">
        <div className="flex flex-col gap-1 border-b py-1">
          <div className="text-sm text-gray-600">日時</div>
          <div>xxxx/xx/xx xx:xx</div>
        </div>
        <div className="flex flex-col gap-1 border-b py-1">
        <div className="text-sm text-gray-600">気持ち</div>
          <textarea
            autoFocus name="" id="" className="bg-gray-100 rounded w-full h-32 p-2" />
        </div>
      </div>
    </div>
  )
}
