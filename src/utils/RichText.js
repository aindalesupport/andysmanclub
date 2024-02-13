import React, { useContext } from "react";
import {
  render,
  MARK_BOLD,
  MARK_LINK,
  NODE_QUOTE,
  NODE_UL,
  NODE_LI,
  NODE_OL,
  NODE_PARAGRAPH,
  NODE_HEADING,
} from "storyblok-rich-text-react-renderer";
import { Link } from "gatsby";
import ContentCtaCentered from "src/components/ContentCtaCentered";
import { PageContext } from "src/utils/context";

const RichText = ({ children, link, paragraph_classes, bold_classes, use_bg = true, text_color = "text-white" }) => {

  const { background_color } = useContext(PageContext)

  if( use_bg ) {
    text_color = background_color === "bg-black" ? "text-white" : "text-black";
  }

  return render(children, {
    markResolvers: {
      [MARK_LINK]: (children, props) => {
        const { href, target, linktype } = props;

        if (target === "_blank") {
          // External links
          return (
            <a
              className={`text-yellow font-semibold ${link} duration-300 hover:underline`}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          );
        }
        if (linktype === "email") {
          // Email links: add `mailto:` scheme and map to <a>
          return (
            <a
              className={`text-yellow font-semibold ${link} duration-300 hover:underline`}
              href={`mailto:${href}`}
            >
              {children}
            </a>
          );
        }
        if (href.startsWith("https") || href.startsWith("www")) {
          // HTTPS or WWW
          return (
            <a
              className={`text-yellow font-semibold ${link} duration-300 hover:underline`}
              href={href.startsWith("www") ? `https://${href}` : href}
              target={target}
            >
              {children}
            </a>
          );
        }
        // Internal links: map to <Link>
        return (
          <Link
            className={`text-yellow font-semibold ${link} duration-300 hover:underline`}
            to={href}
          >
            {children}
          </Link>
        );
      },
      [MARK_BOLD]: (children) => (
        <span className={bold_classes ? bold_classes : "font-semibold"}>
          {children}
        </span>
      ),
    },
    nodeResolvers: {
      [NODE_QUOTE]: (children) => (
        <blockquote
          className={`font-display border-yellow my-16 border-l-4 px-2 pl-4 text-2xl uppercase not-italic !leading-[0.85] tracking-normal text-black before:hidden after:hidden lg:text-3xl`}
        >
          {children}
        </blockquote>
      ),
      [NODE_UL]: (children) => (
        <ul className={`my-3 list-disc pl-5`}>{children}</ul>
      ),
      [NODE_LI]: (children) => <li className="">{children}</li>,
      [NODE_OL]: (children) => (
        <ol className={`my-3 list-decimal pl-5`}>{children}</ol>
      ),
      [NODE_PARAGRAPH]: (children) => (
        <p className={`${paragraph_classes ? paragraph_classes : ""} ${text_color}`}>{children}</p>
      ),
      [NODE_HEADING]: (children, { level }) => {
        const HeadingLevel = `h${level}`;
        return (
          <HeadingLevel
            className={`font-body m-0 pt-6 pb-[1.25rem] font-semibold ${text_color}`}
          >
            {children}
          </HeadingLevel>
        );
      },
    },
    blokResolvers: {
      "content-cta-centered": (props) => <ContentCtaCentered {...props} />,
      code: (props) => (
        <div
          className="code"
          dangerouslySetInnerHTML={{ __html: props.code }}
        ></div>
      ),
    },
  });
};

export default RichText;
