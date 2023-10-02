import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import VideoSent from './Components/VideoReadyPage - components/VideoSent';
import Login from './pages/LoginPage/Login';
import SingleVideoView from './pages/singleVideoView/SingleVideoView';
import VideoReadyPage from './pages/VideoReadyPage/VideoReadyPage';
import VideoRepository from './pages/VideoRepositoryPage/VideoRepository';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/video" element={<VideoRepository />} />
      <Route path="/singlevideo" element={<SingleVideoView />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ready" element={<VideoReadyPage />} />
      <Route path="/sent" element={<VideoSent />} />
    </Route>
  )
);

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App