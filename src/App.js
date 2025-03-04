import { styled } from "styled-components";
import SideBar from "./components/SideBar";
import { lazy,Suspense } from "react";
const LazyHome = lazy(() => import('./components/Home'))
const LazyAbout = lazy(() => import('./components/About'))
const LazyContact = lazy(() => import('./components/Contact'))
const LazyProjects = lazy(() => import('./components/Projects'))
const LazySkills = lazy(() => import('./components/Skills'))
function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App; 
const Container = styled.div`
   background: #0a0318;
`

