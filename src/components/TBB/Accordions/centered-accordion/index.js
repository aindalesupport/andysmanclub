import React, { useState, useEffect, useRef } from 'react'
import SbEditable from "storyblok-react"
import RichText from 'src/utils/RichText'
import Label from 'src/components/Label'
import Heading from 'src/components/Heading'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Faq = (props) => {

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, [])

    return (
        <Disclosure as="div" className="pt-4 last:border-b">
            {({ open }) => (
            <>
                <dt className="text-lg">
                <Disclosure.Button className="group text-left w-full flex justify-between items-start">
                    <h5 className={classNames(open ? 'text-red-800' : 'text-indigo-600', 'font-display uppercase lg:text-xl text-lg tracking-wider group-hover:text-red-800 mb-0 duration-500')}>{props.title}</h5>
                    <span className="ml-6 h-7 flex items-center">
                    <ChevronDownIcon
                        className={classNames(open ? '-rotate-180 text-red-800' : 'rotate-0 text-indigo-600', 'h-6 w-6 transform transition-all duration-500 ease-in-out group-hover:text-red')}
                        aria-hidden="true"
                    />
                    </span>
                </Disclosure.Button>
                </dt>
                <dd className="mt-2 pr-12">
                    <div style={{ maxHeight: open ? height : 0 }} className={classNames(open ? 'mb-4' : 'mb-0', 'overflow-hidden transform transition-all duration-500 ease-in-out')}>
                        <div className="font-body text-sm leading-6" ref={ref}>
                            <RichText>{props.content}</RichText>
                        </div>
                    </div>
                </dd>
            </>
            )}
        </Disclosure>
    )
};

const CenteredAccordion = ({blok}) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="relative bg-white py-16 sm:py-20">
                <div className="flex flex-row flex-wrap max-w-7xl mx-auto">
                    <div className="w-full lg:w-1/2 px-6">
                        <Label className="text-indigo-600 before:bg-indigo-600 mb-4">{blok.label}</Label>
                        <Heading size="h2" className="text-600">{blok.title}</Heading>
                        <span className="mt-4 text-lg text-gray-500 block prose-indigo">
                            <RichText>{blok.content}</RichText>
                        </span>
                    </div>
                    <div className="w-full lg:w-1/2 px-6 mx-auto">
                        <dl v-for="item in items" className="mt-1 space-y-1 divide-y divide-gray-[#E1E1E1] last:border-b last:pb-1">
                            {blok.items.map((faq) => (
                                <Faq {...faq} key={faq.title}></Faq>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </SbEditable>
  )
};

export default CenteredAccordion;