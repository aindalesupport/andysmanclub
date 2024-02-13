import React, { useContext } from "react";
import { PageContext } from "src/utils/context";
import { ContainerClasses, LabelClasses, InputClasses } from "./FieldClasses"

const CtaReferrer = ({ register }) => {
    const { ctaReferrer } = useContext(PageContext)
    return(
        <div className={`col-span-6 opacity-0 invisible h-0 !m-0 ${ContainerClasses}`}>
            {/* eslint-disable-next-line */}
            <label for="cta_referrer" className={`${LabelClasses}`}>Cta Referrer</label> 
            <input {...register("cta_referrer")} className={`${InputClasses}`} type="text" name="cta_referrer" id="cta_referrer" value={ctaReferrer} />
        </div>
    )
}

export default CtaReferrer