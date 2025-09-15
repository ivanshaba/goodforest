import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyGoodForests from "./pages/WhyGoodForests";
import About from "./pages/About";
import Work from "./pages/Work";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import AboutStory from "./pages/about/Story";
import AboutVision from "./pages/about/Vision";
import AboutTeam from "./pages/about/Team";
import AboutPartners from "./pages/about/Partners";
import WorkConservation from "./pages/work/Conservation";
import WorkCommunity from "./pages/work/Community";
import WorkTreeo from "./pages/work/TreeO";
import WorkAreas from "./pages/work/Areas";
import WorkFaqs from "./pages/work/Faqs";
import ResourcesReports from "./pages/resources/Reports";
import ResourcesEducation from "./pages/resources/Education";
import PartnersDonate from "./pages/partners/Donate";
import PartnersOpportunities from "./pages/partners/Opportunities";
import PartnersCorporate from "./pages/partners/Corporate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Main Pages */}
          <Route path="/why-good-forests" element={<WhyGoodForests />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partners" element={<Partners />} />
          
          {/* About Subpages */}
          <Route path="/about/story" element={<AboutStory />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/team" element={<AboutTeam />} />
          <Route path="/about/partners" element={<AboutPartners />} />
          
          {/* Work Subpages */}
          <Route path="/work/conservation" element={<WorkConservation />} />
          <Route path="/work/community" element={<WorkCommunity />} />
          <Route path="/work/treeo" element={<WorkTreeo />} />
          <Route path="/work/areas" element={<WorkAreas />} />
          <Route path="/work/faqs" element={<WorkFaqs />} />
          
          {/* Resources Subpages */}
          <Route path="/resources/reports" element={<ResourcesReports />} />
          <Route path="/resources/education" element={<ResourcesEducation />} />
          
          {/* Partners Subpages */}
          <Route path="/partners/donate" element={<PartnersDonate />} />
          <Route path="/partners/opportunities" element={<PartnersOpportunities />} />
          <Route path="/partners/corporate" element={<PartnersCorporate />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
