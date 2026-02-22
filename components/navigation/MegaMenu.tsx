"use client"
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation";

export default function MegaMenu() {
  const t = useTranslations("MegaMenu")
  const locale = useLocale()

  const rtlLocales = ["ar"]
  const isRTL = rtlLocales.includes(locale)

  const categories = [
    {
      key: "industry",
      data: t.raw("industry")
    },
    {
      key: "country",
      data: t.raw("country")
    },
    {
      key: "verification",
      data: t.raw("verification")
    },
    {
      key: "resources",
      data: t.raw("resources")
    }
  ] as {
    key: string
    data: { title: string; items: string[] }
  }[]

  return (
    <Popover className="relative">
      <Popover.Button className="font-semibold hover:text-blue-300">
        {t("explore")}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel
          className={`
            absolute mt-4 w-screen max-w-6xl bg-white text-black shadow-xl rounded-lg p-10
            ${isRTL ? "right-0 text-right" : "left-0 text-left"}
          `}
        >
          <div className="grid grid-cols-4 gap-10 text-sm">
            {categories.map((category) => (
              <Category
                key={category.key}
                title={category.data.title}
                items={category.data.items}
                locale={locale}
                isRTL={isRTL}
              />
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

function Category({
  title,
  items,
  locale,
  isRTL
}: {
  title: string
  items: string[]
  locale: string
  isRTL: boolean
}) {
  return (
    <div>
      <h3 className="font-semibold mb-3 text-gray-900">{title}</h3>

      <ul className="space-y-2 text-gray-600">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`/${locale}`}
              className={`
                hover:text-blue-600 transition
                ${isRTL ? "block text-right" : "block"}
              `}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
