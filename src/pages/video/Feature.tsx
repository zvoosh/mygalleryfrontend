import "../../styles/video.scss";
import { VideoDetailsPage } from "./VideoDetailsPage";
import { useLocation } from "react-router";

const defaults = [
  {
    key: "feature",
    title: "Feature",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "FeatureVideo",
    folderthumbnail: "FeatureThumbnail",
  },
  {
    key: "event",
    title: "Event",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "EventVideo",
    folderthumbnail: "EventThumbnail",
  },
  {
    key: "documentary",
    title: "Documentary",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "DocumentaryVideo",
    folderthumbnail: "DocumentaryThumbnail",
  },
  {
    key: "coorporate",
    title: "Coorporate",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "CorporateVideo",
    folderthumbnail: "CorporateThumbnail",
  },
  {
    key: "commercial",
    title: "Commercial",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "CommercialVideo",
    folderthumbnail: "CommercialThumbnail",
  },
  {
    key: "podcast",
    title: "Podcast",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "PodcastVideo",
    folderthumbnail: "PodcastThumbnail",
  },
  {
    key: "promo",
    title: "Promo",
    description: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias commodi ea ducimus, magni placeat voluptates, inventore voluptas incidunt optio accusamus facilis? Accusantium optio quia porro, inventore, quaerat autem perferendis ullam nostrum aspernatur voluptas similique esse at odit eum, itaque iure nobis dolorem illo. Iure amet modi quae, aliquid ut aut!`,
    foldervideo: "PromoVideo",
    folderthumbnail: "PromoThumbnail",
  },
];

const FeaturePage = () => {
  const location = useLocation();

  const config = defaults.find(({ key }) =>
    location.pathname.includes(`/video-${key}`)
  );

  if (!config) return <div>ERROR 404</div>;

  return (
    <VideoDetailsPage
      title={config.title}
      description={config.description}
      foldervideo={config.foldervideo}
      folderthumbnail={config.folderthumbnail}
    />
  );
};

export { FeaturePage };
