"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { X } from "lucide-react";

export function SupplierMobileDrawer({ open, setOpen }: any) {
  const t = useTranslations("Header")

  const close = () => setOpen(false)

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={setOpen} className="relative z-50">

        {/* Blurred Overlay */}
        <Transition.Child
          as={Fragment}
          enter="transition duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md" />
        </Transition.Child>

        {/* Sliding Drawer */}
        <Transition.Child
          as={Fragment}
          enter="transform transition duration-300 ease-out"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition duration-200 ease-in"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-y-0 left-0 w-80 bg-surface-dark text-white shadow-2xl rounded-r-2xl p-6 overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={close}
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6 text-sm">

              <div className="flex flex-col gap-4">
                <Link href="/suppliers/programs/export-readiness" onClick={close} className="hover:text-accent transition">
                  {t("readiness")}
                </Link>

                <Link href="/suppliers/onboarding" onClick={close} className="hover:text-accent transition">
                  {t("onboarding")}
                </Link>

                <Link href="/suppliers/academy" onClick={close} className="hover:text-accent transition">
                  {t("academy")}
                </Link>

                <Link href="/about" onClick={close} className="hover:text-accent transition">
                  {t("about")}
                </Link>

                <Link href="/support" onClick={close} className="hover:text-accent transition">
                  {t("support")}
                </Link>

              </div>

              <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
                <Link href="/suppliers/login" onClick={close} className="hover:text-accent transition">
                  {t("signIn")}
                </Link>

                <Link
                  href="/suppliers/register"
                  onClick={close}
                  className="btn-primary px-4 py-2 rounded-md text-center"
                >
                  {t("start_journey")}
                </Link>
              </div>

              <div className="border-t border-white/10 pt-6">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </Transition.Child>

      </Dialog>
    </Transition>
  )
}