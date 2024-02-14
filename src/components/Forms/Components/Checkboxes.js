import React from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";
import { ContainerClasses, LabelClasses, LabelRequiredClasses, ErrorClasses } from "./FieldClasses"

const TextAlignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
}

const CheckboxAlignmentMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
}

const Checkboxes = ({ blok, register, errors }) => {
    return(
        <SbEditable content={blok}>
            <div className={`col-span-6 ${ContainerClasses}`}>
                {!blok.hide_label && <label for={blok.name} className={`${LabelClasses} ${TextAlignmentMap[blok.alignment]}`}>{blok.label}{blok.required && <span className={`${LabelRequiredClasses}`}>*</span>}</label>}
                <div className="text-white mb-3">
                    <RichText>{blok.description}</RichText>
                </div>
                <div className={`flex flex-wrap gap-x-5 gap-y-1 ${CheckboxAlignmentMap[blok.alignment]}`}>
                    {blok.options.replace(/(?:\r\n|\r|\n)/g, '').split(';').filter(option => option !== "").map((option, index) => {
                        const [value, label] = option.split(': ');
                        return (
                            <label for={label} key={index} className="block font-semibold text-sm text-white">
                                <input {...register(blok.name, { required: blok.required })} className="focus:ring-transparent focus:border-white active:bg-yellow checked:!bg-yellow border-darkgrey mr-2 bg-darkgrey" type="checkbox" key={index} value={value} name={`${blok.name}[]`} id={label} />
                                {label}
                            </label>
                        )
                    })}
                </div>
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </div>
        </SbEditable>
    )
}

export default Checkboxes