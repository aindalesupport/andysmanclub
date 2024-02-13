import React, { useState } from "react";
import SbEditable from "storyblok-react";
import InputSizeMap from "./InputSizeMap";
import { ContainerClasses, LabelClasses, LabelRequiredClasses, InputClasses, ErrorClasses } from "./FieldClasses"

const SelectInput = ({ blok, register, watch, errors }) => {

    const [currentValue, setCurrentValue] = useState(null)

    let visibility = true;
    let watchField = "";
    let watchValue = "";

    if( blok.conditional_visibility ) {
        [watchField, watchValue] = blok.conditional_visibility?.split(": ");
        visibility = watch(watchField, watchValue);
    }

    return(
        <SbEditable content={blok}>
            <div className={`${InputSizeMap(blok.size)} ${ContainerClasses} ${visibility === true || visibility === watchValue ? "block" : "hidden"}`}>
                {!blok.hide_label && <label for={blok.name} className={`${LabelClasses}`}>{blok.label}{blok.required && <span className={`${LabelRequiredClasses}`}>*</span>}</label>}
                <select {...register(blok.name, { required: blok.required })} className={`${InputClasses} ${currentValue ? '!border-white !text-white' : '!border-darkgrey !text-darkgrey'} focus:!border-yellow`} name={blok.name} id={blok.name} onChange={(e) => setCurrentValue(e.target.value)}>
                    <option value={null} selected disabled>Please select...</option>
                    {blok.options.replace(/(?:\r\n|\r|\n)/g, '').split(';').filter(option => option !== "").map((option, index) => {
                        const [value, label] = option.split(': ');
                        return <option key={index} value={value} className="peer">{label}</option>
                    })}
                </select>
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </div>
        </SbEditable>
    )
}

export default SelectInput