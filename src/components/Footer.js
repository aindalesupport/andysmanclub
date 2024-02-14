import React from "react";
import Link from "gatsby-link";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";
import DonateSvg from "src/images/footer_donate.svg";
import ItsOkayToTalk from "src/images/ITSOKAYTOTALK.svg";
import Heading from "src/components/Heading";
import LogoHand from "src/images/footer-logo-hand.svg";
import LogoText from "src/images/footer-logo-text.svg";
import resolveLink from "src/utils/resolveLink";

const Footer = ({ settings }) => {

  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-16 pt-24 lg:pb-12 lg:pt-48">
        <div className="relative mb-24 flex flex-col items-center justify-center lg:mb-32">
          <LogoHand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <LogoText className="animate-reverse-spin" />
        </div>
        <div className="mb-16 flex flex-col items-center justify-between gap-10 lg:mb-32 lg:flex-row lg:gap-4">
          <div className="text-center">
            <Heading size="h3" className="text-white">
              Contact Us
            </Heading>
            <a
              href={`mailto:${settings.content.company_email}`}
              className="text-darkgrey hover:text-yellow font-body duration-300"
            >
              {settings.content.company_email}
            </a>
            <div className="mt-2 flex flex-row items-center justify-center gap-4 text-xl">
              <a
                href={`${settings.content.facebook}`}
                className="text-darkgrey hover:text-yellow duration-300"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={`${settings.content.instagram}`}
                className="text-darkgrey hover:text-yellow duration-300"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href={`${settings.content.twitter}`}
                className="text-darkgrey hover:text-yellow duration-300"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href={`${settings.content.linkedin}`}
                className="text-darkgrey hover:text-yellow duration-300"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="text-center">
            <Heading size="h3" className="text-white">
              Meet With Us
            </Heading>
            <div className="prose prose-p:my-0 prose-a:font-normal prose-a:text-darkgrey hover:prose-a:text-yellow hover:prose-a:no-underline font-body text-white">
              <RichText use_bg={false}>{settings.content.work_time}</RichText>
            </div>
          </div>
          <div className="text-center">
            <Heading size="h3" className="text-white">
              Emergency Contacts
            </Heading>
            <div className="prose prose-p:my-0 prose-a:font-normal prose-a:text-darkgrey hover:prose-a:text-yellow font-body text-white">
              <RichText use_bg={false}>{settings.content.emergency_contacts}</RichText>
            </div>
          </div>
        </div>
        <ItsOkayToTalk className="my-12 w-full lg:my-16" />
        <div className="mb-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
          <nav
            className="font-body flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {settings.content.footer_navigation.map((item) => (
              <SbEditable content={item} key={item._uid}>
                <Link
                  key={item._uid}
                  to={resolveLink(item.target.cached_url)}
                  className="lg:text-darkgrey lg:hover:text-yellow px-2 py-2 text-base tracking-[-0.5px] text-white duration-300 first:pl-0"
                >
                  {item.name}
                </Link>
              </SbEditable>
            ))}
          </nav>
          <a
            href="https://www.justgiving.com/andysmanclub"
            target="_blank"
            rel="noreferrer"
          >
            <DonateSvg className="w-44" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="font-body text-darkgrey max-w-[720px] text-center text-xs tracking-[-0.2px] lg:text-left">
            <RichText use_bg={false}>{settings.content.small_footer_text}</RichText>
          </div>
          <div className="font-body text-xs text-white">
            Website by{" "}
            <a
              href="https://www.thebiggerboat.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow lg:text-darkgrey text-yellow duration-300"
            >
              The Bigger Boat
            </a>
          </div>
        </div>
      </div>
      {/* Fixed CTA */}
      <Link
        to="/find-your-nearest-group/"
        className="bg-yellow fixed bottom-3 right-3 z-40 flex h-[85px] w-[85px] items-center justify-center rounded-full text-center duration-300 hover:scale-105 lg:bottom-5 lg:right-5 lg:h-28 lg:w-28"
      >
        <Heading
          size="h5"
          className="lg:!text-2.5xl !mb-0 pt-1.5 !text-xl !leading-[0.8] tracking-[0] !text-black"
        >
          Find your
          <br />
          nearest
          <br />
          group
        </Heading>
      </Link>
    </footer>
  );
};

export default Footer;
