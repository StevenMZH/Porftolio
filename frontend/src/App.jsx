import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useMediaQuery } from "react-responsive";

import MainLayout from "./layouts/MainLayout";
import MobileLayout from "./layouts/MobileLayout";



const Home = lazy(() => import("./pages/Home"));

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const Layout = isMobile ? MobileLayout : MainLayout;

  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={ <Suspense fallback={<div></div>}>
          <Home />
        </Suspense>}/> 
        
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
