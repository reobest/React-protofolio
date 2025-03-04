import SideBar from "./components/SideBar";
import { lazy,Suspense } from "react";
const LazyHome = lazy(() => import('./components/Home'))
const LazyAbout = lazy(() => import('./components/About'))
const LazyContact = lazy(() => import('./components/Contact'))
const LazyProjects = lazy(() => import('./components/Projects'))
const LazySkills = lazy(() => import('./components/Skills'))
function App() {
  return (
    <main style={{overflowX:"hidden",background:"#0a0318"}}>
      <SideBar />
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyHome/>
      </Suspense>
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyAbout/>
      </Suspense>
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyContact/>
      </Suspense>
      <Suspense fallback={<h1>loading...</h1>}>
        <LazyProjects/>
      </Suspense>
      <Suspense fallback={<h1>loading...</h1>}>
        <LazySkills/>
      </Suspense>
    </main>
  );
}

export default App; 


