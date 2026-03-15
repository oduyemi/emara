"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function ExploreMenu() {
  const t = useTranslations("ExploreMenu")
  const locale = useLocale()

  const rtlLocales = ["ar"]
  const isRTL = rtlLocales.includes(locale)

  const categories = [
    { key: "programs", data: t.raw("programs") },
    { key: "academy", data: t.raw("academy") },
    { key: "verification", data: t.raw("verification") },
    { key: "resources", data: t.raw("resources") }
  ] as {
    key: string
    data: { title: string; items: { label: string; slug: string }[] }
  }[]

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`font-semibold transition-colors duration-200 
            ${open ? "text-blue-500" : "hover:text-blue-400"}`}
          >
            {t("explore")}
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-3"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <Popover.Panel
              className={`
              absolute mt-6 w-screen max-w-6xl bg-white text-black shadow-2xl 
              rounded-xl p-10 border border-gray-100
              ${isRTL ? "right-0 text-right" : "left-0 text-left"}
            `}
            >
              {({ close }) => (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                  {categories.map((category) => (
                    <Category
                      key={category.key}
                      title={category.data.title}
                      items={category.data.items}
                      locale={locale}
                      isRTL={isRTL}
                      category={category.key}
                      close={close}
                    />
                  ))}
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

function Category({
  title,
  items,
  locale,
  isRTL,
  category,
  close
}: {
  title: string
  items: { label: string; slug: string }[]
  locale: string
  isRTL: boolean
  category: string
  close: () => void
}) {
  return (
    <div className="group">
      <h3 className="font-semibold mb-4 text-gray-900 tracking-tight">
        {title}
      </h3>

      <ul className="space-y-3 text-gray-600">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/suppliers/${category}/${item.slug}`}
              onClick={() => close()}
              className={`
              block rounded-md px-2 py-1 transition-all duration-150
              hover:bg-blue-50 hover:text-blue-600
              ${isRTL ? "text-right" : ""}
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}