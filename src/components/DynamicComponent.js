import React from "react";
import Placeholder from "./Placeholder";
import SimpleCentered from "./SimpleCentered";
import TwoColumnText from "./TwoColumnText"
import Badge from "./Badge"
import OffsetImageAndText from "./OffsetImageAndText"
import SimpleCenterBrandedWithImage from "./SimpleCenterBrandedWithImage"
import ThreeColumnCards from "./ThreeColumnCards"
import TwoColumnTextImage from "./TwoColumnTextImage"
import Testimonials from "./Testimonials"
import ContentHeading from "./ContentHeading"
import Team from "./Team"
import TwoColumnTextLinks from "./TwoColumnTextLinks"
import Groups from "./Groups"
import Form from "./Form"
import ImageSlider from "./ImageSlider"
import YoutubeVideo from "./YoutubeVideo"

/* Marketing / PageSections / ContentSections */
import Centered from "./Marketing/PageSections/ContentSections/Centered";
import SimpleThreeColumn from "./SimpleThreeColumn";
import SplitWithImage from "./Marketing/PageSections/ContentSections/SplitWithImage";
import TwoColumns from "./Marketing/PageSections/ContentSections/TwoColumns";
import TwoColumnsWithImage from "./Marketing/PageSections/ContentSections/TwoColumnsWithImage";
import TwoColumnsWithTestimonial from "./Marketing/PageSections/ContentSections/TwoColumnsWithTestimonial";
import WithTestimonialAndStats from "./Marketing/PageSections/ContentSections/WithTestimonialAndStats";
import Stat from "./Marketing/PageSections/ContentSections/Stat";
import FullWidthImage from './Marketing/PageSections/ContentSections/FullWidthImage'
import SimpleCenteredBranded from "./SimpleCenteredBranded";

/* Marketing / PageSections / Contact Sections */
import ContactCentered from "./Marketing/PageSections/ContactSections/Centered";

/* Marketing / PageSections / CTA Sections */
import BrandPanelOverlappingImage from "./Marketing/PageSections/CTASections/brand-panel-with-overlapping-image";
import BrandPanelAppScreenshot from "./Marketing/PageSections/CTASections/brand-panel-with-app-screenshot";
import SimpleJustified from "./Marketing/PageSections/CTASections/simple-justified";

/* Marketing / PageSections / FAQs */
import OffsetSupportingText from "./Marketing/PageSections/FAQs/offset-supporting-text";

/* Marketing / PageSections / Testimonials */
import TestimonialsSimpleCentered from "./Marketing/PageSections/Testimonials/SimpleCentered";

/* Marketing / Feedback / 404 Pages */
import Simple404 from "./Marketing/Feedback/404Pages/simple";

/* TBB */
import CenteredAccordion from "./TBB/Accordions/centered-accordion";
import Hero from "./TBB/Heros/Hero";
import HeroSlimline from "./TBB/Heros/HeroSlimline";
import DefaultContent from "./TBB/DefaultContent/DefaultContent"

/* Custom */
import GoogleMap from "./Custom/GoogleMap";
import Video from "./Custom/Video"
import LogoClouds from "./LogoClouds";
import Accordion from "./Custom/Accordion";
import GroupsFallback from "./GroupsFallback";


const Components = {
  "hero": Hero,
  "hero-slimline": HeroSlimline,
  "simple-centered": SimpleCentered,
  "two-column-text": TwoColumnText,
  "offset-image-and-text": OffsetImageAndText,
  "badge": Badge,
  "simple-center-branded-with-image": SimpleCenterBrandedWithImage,
  "three-column-cards": ThreeColumnCards,
  "two-column-text-image": TwoColumnTextImage,
  "testimonials": Testimonials,
  "content-heading": ContentHeading,
  "team": Team,
  "two-column-text-links": TwoColumnTextLinks,
  "groups": Groups,
  "form": Form,
  "image-slider": ImageSlider,
  "youtube_video" : YoutubeVideo,
  /* Marketing / PageSections / ContentSections */
  "split-with-image": SplitWithImage,
  centered: Centered,
  "two-columns": TwoColumns,
  "two-columns-with-image": TwoColumnsWithImage,
  "two-columns-with-testimonial": TwoColumnsWithTestimonial,
  "simple-three-column": SimpleThreeColumn,
  "with-testimonial-and-stats": WithTestimonialAndStats,
  "full-width-image": FullWidthImage,
  "simple-centered-branded": SimpleCenteredBranded,
  stat: Stat,
  /* Marketing / Feedback / 404 Pages */
  "simple-404" : Simple404,
  /* Marketing / PageSections / CTA Sections */
  "brand-panel-overlapping-image": BrandPanelOverlappingImage,
  "brand-panel-app-screenshot": BrandPanelAppScreenshot,
  "simple-justified": SimpleJustified,
  /* Marketing / PageSections / FAQs */
  "offset-with-supporting-text": OffsetSupportingText,
  /* Marketing / PageSections / Contact Sections */
  "contact-centered": ContactCentered,
  /* Marketing / PageSections / Testimonials */
  "testimonial-simple-centered": TestimonialsSimpleCentered,
  /* TBB */
  "centered-accordion": CenteredAccordion,
  "default-content": DefaultContent,
  /* Custom */
  "video": Video,
  "google-map":GoogleMap,
  "logo-clouds": LogoClouds,
  "accordion": Accordion,
  "group_fallback": GroupsFallback
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} key={blok._uid} />;
  }

  return blok.component ? <Placeholder componentName={blok.component} /> : null;
};

export default DynamicComponent;
