import React from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText"
import { ContainerClasses, LabelClasses, LabelRequiredClasses, ErrorClasses } from "./FieldClasses"

const TextAlignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
}

const RadioButtonAlignmentMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
}

const RadioButtons = ({ blok, register, errors }) => {
    return(
        <SbEditable content={blok}>
            <fieldset className={`col-span-6 ${ContainerClasses}`}>
                {!blok.hide_label && <legend for={blok.name} className={`${LabelClasses} ${TextAlignmentMap[blok.alignment]}`}>{blok.label}{blok.required && <span className={`${LabelRequiredClasses}`}>*</span>}</legend>}
                <div className="text-white mb-3">
                    <RichText>{blok.description}</RichText>
                </div>
                <div className={`flex flex-wrap gap-x-8 gap-y-1 mt-3 ${RadioButtonAlignmentMap[blok.alignment]}`}>
                    {blok.options.replace(/(?:\r\n|\r|\n)/g, '').split(';').filter(option => option !== "").map((option, index) => {
                        const [value, label] = option.split(': ');
                        return (
                            <div className="flex flex-row gap-y-5">
                                <label key={index} className="block font-semibold text-sm text-white peer-checked:text-yellow hover:cursor-pointer">
                                    <input {...register(blok.name, { required: blok.required })} className="focus:ring-transparent focus:border-white active:bg-yellow checked:!bg-yellow border-darkgrey bg-darkgrey mr-2 peer hover:cursor-pointer" type="radio" key={index} value={value} name={blok.name} />
                                    {label}
                                </label>
                            </div>
                        )
                    })}
                </div>
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </fieldset>
        </SbEditable>
    )
}

export default RadioButtons