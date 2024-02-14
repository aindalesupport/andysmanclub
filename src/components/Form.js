import React, { useContext, useRef } from "react";
import resolveLink from "src/utils/resolveLink";
import Label from "src/components/Label";
import Heading from "src/components/Heading";
import RichText from "src/utils/RichText";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import SbEditable from "storyblok-react";
import TextInput from "src/components/Forms/Components/TextInput";
import EmailInput from "src/components/Forms/Components/EmailInput";
import TextAreaInput from "src/components/Forms/Components/TextAreaInput";
import FileInput from "src/components/Forms/Components/FileInput";
import NumberInput from "src/components/Forms/Components/NumberInput";
import SelectInput from "src/components/Forms/Components/SelectInput";
import RadioButtons from "src/components/Forms/Components/RadioButtons";
import Checkboxes from "src/components/Forms/Components/Checkboxes";
import ConsentInput from "src/components/Forms/Components/ConsentInput";
import CtaReferrer from "src/components/Forms/Components/CtaReferrer";
import HiddenInput from "src/components/Forms/Components/HiddenInput";
import CookieValue from "src/utils/CookieValue";
import { PageContext } from "src/utils/context";
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Components = {
  "text-input": TextInput,
  "email-input": EmailInput,
  "textarea-input": TextAreaInput,
  "file-input": FileInput,
  "number-input": NumberInput,
  "select-input": SelectInput,
  "radio-buttons": RadioButtons,
  checkboxes: Checkboxes,
  "consent-input": ConsentInput,
  "cta-referrer": CtaReferrer,
  "hidden-input": HiddenInput,
};

const Form = ({ blok }) => {
  const ref = useRef();
  const isVisible = InView(ref, false);

  useBackground({ isVisible, color: blok.background_color });

  const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
    isVisible && "!opacity-100 !translate-y-0"
  }`;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function encode(data) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    }
    return formData;
  }

  // Getting the gated content data
  const { gatedContentAllowed, setGatedContentAllowed, ctaReferrer } =
    useContext(PageContext);
  const redirectUrl = CookieValue("gated_content_redirect_url");

  const onSubmit = (data) => {
    // If the form is for gated content
    if (blok.gated_content_form) {
      if (!gatedContentAllowed) {
        data.cta_referrer = ctaReferrer;
        setGatedContentAllowed(true);
        window?.dataLayer?.push({
          event: "form-submission",
          formName: "gated-content",
        });
        if (redirectUrl) {
          window.open(redirectUrl, "noopener,noreferrer");
        }
      }
    }
    fetch("/", {
      method: "POST",
      body: encode(data),
    })
      .then(() => {
        window?.dataLayer?.push({
          event: "form-submission",
          formName: blok.form_name,
        });
        navigate(resolveLink(blok.action.cached_url));
      })
      .catch((error) => console.log(error));
  };

  const toggleDefaultContent = !(
    blok.label ||
    (blok.title && blok.title.content.content) ||
    (blok.description && blok.description.content.content)
  );

  return (
    <SbEditable content={blok}>
      <div
        className={`${
          blok.background_color === "bg-black" ? "text-white" : "text-black"
        }`}
        ref={ref}
      >
        <div
          className={`max-w-8xl mx-auto flex flex-col items-start justify-start gap-12 py-36 px-6 lg:flex-row lg:gap-40 lg:py-52  ${animationFadeUp}`}
        >
          <div
            className={`w-full max-w-lg lg:w-6/12 ${
              toggleDefaultContent ? "order-last lg:order-first" : ""
            }`}
          >
            {/* If Label, Title, Description fields are NOT empty */}
            {!toggleDefaultContent && (
              <>
                <Label className="mb-8">{blok.label}</Label>
                {blok.title && (
                  <Heading
                    size="h1"
                    className={`!mb-8 !text-6xl !leading-[0.8] lg:!text-[110px] ${
                      blok.background_color === "bg-black"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    <RichText>{blok.title}</RichText>
                  </Heading>
                )}
                {blok.description && (
                  <div className="prose text-base tracking-[-0.05em] md:text-lg">
                    <RichText>{blok.description}</RichText>
                  </div>
                )}
              </>
            )}
            {/* If Label, Title, Description fields are empty */}
            {toggleDefaultContent && (
              <div class="flex flex-col gap-12 lg:gap-24">
                <div>
                  <Label className="mb-8">Say Hello</Label>
                  <Heading
                    size="h2"
                    className={`!text-4xl lg:!text-6xl ${
                      blok.background_color === "bg-black"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    <a
                      href="mailto:info@andysmanclub.co.uk"
                      className="hover:text-yellow uppercase duration-300"
                    >
                      INFO@ANDYSMANCLUB.CO.UK
                    </a>
                  </Heading>
                </div>
                <div>
                  <Label className="mb-8">Socialise with us</Label>
                  <a
                    href="https://www.facebook.com/andysmanclub/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display hover:text-yellow block !text-4xl uppercase !leading-[0.8] duration-300 lg:!text-6xl lg:!leading-[0.8]"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/andysmanclubuk/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display hover:text-yellow block !text-4xl uppercase !leading-[0.8] duration-300 lg:!text-6xl lg:!leading-[0.8]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com/andysmanclubuk"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display hover:text-yellow block !text-4xl uppercase !leading-[0.8] duration-300 lg:!text-6xl lg:!leading-[0.8]"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/company/andysmanclub"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display hover:text-yellow block !text-4xl uppercase !leading-[0.8] duration-300 lg:!text-6xl lg:!leading-[0.8]"
                  >
                    Linkedin
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8mJx0-NFRJerTgTreJ2U7w"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display hover:text-yellow block !text-4xl uppercase !leading-[0.8] duration-300 lg:!text-6xl lg:!leading-[0.8]"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            name={blok.form_name}
            id={blok.form_name}
            className="flex w-full flex-col lg:w-6/12"
            data-netlify="true"
          >
            <Label className="mb-6">{blok.form_label}</Label>
            <div className="grid grid-cols-6 gap-x-4">
              {blok.fields.map((field) => {
                const Component = Components[field.component];
                return (
                  field.name && (
                    <Component
                      blok={field}
                      register={register}
                      watch={watch}
                      errors={errors}
                      key={field._uid}
                    />
                  )
                );
              })}
            </div>
            <input
              {...register("form-name")}
              type="hidden"
              name="form-name"
              value={blok.form_name}
            />
            <button
              type="submit"
              className="font-display bg-yellow text-1.5xl before:bg-yellow border-yellow relative z-[1] inline-flex cursor-pointer items-center justify-center self-end overflow-hidden border px-[30px] py-[20px] font-extrabold uppercase !leading-[1.5rem] !tracking-[0.01em] text-black transition
              duration-300 before:absolute before:right-full before:z-[-1] before:h-full before:w-full before:duration-300 before:content-[''] hover:text-black hover:before:right-0 lg:bg-transparent lg:text-2xl lg:text-white"
            >
              {blok.button_text}
            </button>
          </form>
        </div>
      </div>
    </SbEditable>
  );
};

export default Form;
