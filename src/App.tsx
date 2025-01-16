import { Route, Routes } from "react-router"
import Welcome from "./screens/Welcome"
import Person from "./screens/Person"
import People from "./screens/People"
import Prays from "./screens/Prays"
import NewPray from "./screens/NewPray"
import Pray from "./screens/Pray"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/people/:personId" element={<Person />} />
      <Route path="/people/:personId/prays" element={<Prays />} />
      <Route path="/people/:personId/prays/new" element={<NewPray />} />
      <Route path="/people/:personId/prays/:prayId" element={<Pray />} />
    </Routes>
  )
}
