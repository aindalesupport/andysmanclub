import React from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";
import { ContainerClasses, LabelClasses, LabelRequiredClasses, ErrorClasses } from "./FieldClasses"

const ConsentInput = ({ blok, register, errors }) => {
    return(
        <SbEditable content={blok}>
            <div className={`col-span-6 my-4 mb-12 ${ContainerClasses}`}>
                { !blok.hide_label && <label for={blok.name} className={`${LabelClasses}`}>{blok.label}{blok.required && <span className={`${LabelRequiredClasses}`}>*</span>}</label>}
                <label for={blok.name} className="text-xs text-white flex">
                    <input {...register(blok.name, { required: blok.required })} className="block focus:ring-transparent focus:border-white text-yellow mr-2 bg-darkgrey" type="checkbox" name={blok.name} id={blok.name} placeholder={`${blok.label}${blok.required ? "*" : ""}`}/>
                    <RichText>{blok.description}</RichText>
                    {blok.required ? "*" : ""}
                </label>
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </div>
        </SbEditable>
    )
}

export default ConsentInput