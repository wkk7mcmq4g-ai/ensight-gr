import GreekCorePage from './pages/GreekCorePage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import DataClarity from "./pages/DataClarity";
import AiAutomation from "./pages/AiAutomation";
import HowIWork from "./pages/HowIWork";
import BusinessApplications from "./pages/BusinessApplications";
import EnquirySent from "./pages/EnquirySent";
import Costing from "./pages/Costing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            {['/el', '/el/data-clarity', '/el/business-applications', '/el/ai-automation', '/el/case-studies/loux-softone-bi', '/el/case-studies/fhl-entersoft-reporting', '/el/enquiry-sent'].map(path => <Route key={path} path={path} element={<GreekCorePage key={path} />} />)}
            <Route path="/enquiry-sent" element={<EnquirySent />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/case-studies/softone-receivables-cash" element={<Navigate to="/case-studies/loux-softone-bi" replace />} />
            <Route path="/data-clarity" element={<DataClarity />} />
            <Route path="/business-applications" element={<BusinessApplications />} />
            <Route path="/ai-automation" element={<AiAutomation />} />
            <Route path="/how-i-work" element={<HowIWork />} />
            <Route path="/costing" element={<Costing />} />
            {/* Retired pages: keep old links working */}
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/operational-transformation" element={<Navigate to="/ai-automation" replace />} />

          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
