import { Routes, Route } from "react-router-dom"

import { Profile } from "../Pages/Profile"
import { Home } from "../Pages/Home"
import { NewMovie } from "../Pages/NewMovie"
import { MoviePreview } from "../Pages/MoviePreview"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/moviepreview" element={<MoviePreview />} />
    </Routes>
  )
}