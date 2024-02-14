import React from "react";
import SbEditable from "storyblok-react";
import InputSizeMap from "./InputSizeMap";
import { ContainerClasses, LabelClasses, LabelRequiredClasses, InputClasses, ErrorClasses } from "./FieldClasses"

const NumberInput = ({ blok, register, errors }) => {
    return(
        <SbEditable content={blok}>
            <div className={`${InputSizeMap(blok.size)} ${ContainerClasses}`}>
                {!blok.hide_label && <label for={blok.name} className={`${LabelClasses}`}>{blok.label}{blok.required && <span className={`${LabelRequiredClasses}`}>*</span>}</label>}
                <input {...register(blok.name, { required: blok.required })} className={`${InputClasses}`} type="number" name={blok.name} id={blok.name} placeholder={blok.placeholder}/>
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </div>
        </SbEditable>
    )
}

export default NumberInput