import React from "react";
import SbEditable from "storyblok-react";
import InputSizeMap from "./InputSizeMap";
import { ContainerClasses, LabelClasses, InputClasses, ErrorClasses } from "./FieldClasses"

const HiddenInput = ({ blok, register, errors }) => {
    return(
        <SbEditable content={blok}>
            <div className={`${InputSizeMap(blok.size)} ${ContainerClasses} !col-span-6 opacity-0 invisible h-0 !m-0`}>
                {!blok.hide_label && <label for={blok.name} className={`${LabelClasses}`}>{blok.name}</label>}
                <input {...register(blok.name, { required: blok.required })} className={`${InputClasses}`} type="text" name={blok.name} id={blok.name} value={blok.value} />
                {errors[blok.name] && <span className={`${ErrorClasses}`}>This field is required</span>}
            </div>
        </SbEditable>
    )
}

export default HiddenInput