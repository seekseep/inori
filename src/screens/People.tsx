import { Link, useNavigate } from "react-router";
import { FiPlus, FiChevronRight } from "react-icons/fi";

export default function People () {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/people/xxxx');
  }
  return (
    <div>
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-xl mx-auto">
          <div className="text-center text-lg py-2">
            人
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-xl mx-auto">
          <div className="py-8 flex flex-col gap-1 pb-20">
            <Link to="/people/me" className="flex items-center gap-2 border-b active:bg-gray-100 rounded">
              <div className="flex-grow pl-2 py-2">あなた</div>
              <div className="p-2">
                <FiChevronRight />
              </div>
            </Link>
            <Link to="/people/me" className="flex items-center gap-2 border-b active:bg-gray-100 rounded">
              <div className="flex-grow pl-2 py-2">母</div>
              <div className="p-2">
                <FiChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed h-0 w-full bottom-0 overflow-visible">
        <div className="absolute left-[50%] -ml-6 bottom-8">
          <button
            onClick={handleAdd}
            className="bg-blue-500 rounded-full text-white w-12 h-12 flex justify-center items-center text-2xl">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  )
}
