"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Link from "next/link"

export function MobileDrawer({ open, setOpen }: any) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-y-0 left-0 w-72 bg-white p-6">
          <Dialog.Title className="text-lg font-bold mb-4">
            Menu
          </Dialog.Title>
          <nav className="flex flex-col gap-4">
            <Link href="#">Electronics</Link>
            <Link href="#">Fashion</Link>
            <Link href="#">Home</Link>
            <Link href="#">Sports</Link>
          </nav>
        </div>
      </Dialog>
    </Transition>
  )
}
