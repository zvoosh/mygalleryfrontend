import { Routes, Route, useLocation } from "react-router-dom"; // ✅ use `react-router-dom`, not `react-router`
import { AnimatePresence } from "framer-motion";
import RootLayout from "./RootLayout";
import {
  AirialPage,
  BehindTheSceensPage,
  ClientDetailsPage,
  ClientsPage,
  ContactPage,
  CoorporatePage,
  EventPage,
  FeaturePage,
  GearPage,
  LandingPage,
  PhotoPage,
  PortraitPage,
  VideoPage,
} from "../pages";
import PageWrapper from "../components/PageWrapper";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <PageWrapper>
                <LandingPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
          <Route
            path="/photo"
            element={
              <PageWrapper>
                <PhotoPage />
              </PageWrapper>
            }
          />
          <Route
            path="/portrait"
            element={
              <PageWrapper>
                <PortraitPage />
              </PageWrapper>
            }
          />
          <Route
            path="/event"
            element={
              <PageWrapper>
                <EventPage />
              </PageWrapper>
            }
          />
          <Route
            path="/coorporate"
            element={
              <PageWrapper>
                <CoorporatePage />
              </PageWrapper>
            }
          />
          <Route
            path="/clients"
            element={
              <PageWrapper>
                <ClientsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/clients/details/:client/:videoId"
            element={
              <PageWrapper>
                <ClientDetailsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/airial"
            element={
              <PageWrapper>
                <AirialPage />
              </PageWrapper>
            }
          />
          <Route
            path="/video"
            element={
              <PageWrapper>
                <VideoPage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-feature"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-documentary"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-event"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-commercial"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/video-coorporate"
            element={
              <PageWrapper>
                <FeaturePage />
              </PageWrapper>
            }
          />
          <Route
            path="/behind-the-sceens"
            element={
              <PageWrapper>
                <BehindTheSceensPage />
              </PageWrapper>
            }
          />
          <Route
            path="/gear"
            element={
              <PageWrapper>
                <GearPage />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
