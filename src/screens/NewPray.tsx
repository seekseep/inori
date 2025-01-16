import { SlArrowLeft } from "react-icons/sl";
import LinkButton from "../components/parts/LinkButton";
import { useNavigate, useParams } from "react-router";
import { useProgress } from "../hooks/pray";
import { strokeDasharrayAsCircleProgress as strokeDasharray } from "../utilities/svg";
import { useEffect } from "react";

const DURATION = 3000;
const RADIUS = 40;

export default function NewPray () {
  const personId = useParams().personId;
  const progress = useProgress(DURATION);
  const done = progress === 1;
  const label = done ? "✅️" : "🙏";
  const navigate = useNavigate()

  useEffect(() => {
    if (!done) return

    const timer = window.setTimeout(() => {
      navigate(`/people/${personId}/prays/xxx`)
    }, 500)

    return () => {
      window.clearTimeout(timer)
    }
  }, [done, navigate, personId])

  return (
    <div className="max-w-xl mx-auto min-h-screen flex flex-col">
      <div className="flex">
        <LinkButton to={`/people/${personId}`} variant="link" icon>
          <SlArrowLeft />
        </LinkButton>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div>あなたに対して祈っています</div>
        <svg className="w-64 h-64" viewBox="0 0 100 100">
          <g transform="translate(0 100) rotate(-90 0 0)">
            <circle cx={50} cy={50} r={RADIUS} fill="transparent" strokeWidth="8" className="stroke-gray-100" />
            <circle
              style={{ transition: "stroke-dasharray 0.1s" }}
              cx={50} cy={50} r={RADIUS} fill="transparent" strokeWidth="8" className="stroke-blue-500"
              strokeDasharray={strokeDasharray(progress, RADIUS)} strokeLinecap="round" />
          </g>
          <text x={50} y={50} textAnchor="middle" dominantBaseline="middle" className="text-lg  ">
            {label}
          </text>
        </svg>
      </div>
    </div>
  )
}
