"use client"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export function MobileSearch({ open, setOpen }: any) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={setOpen} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed top-0 left-0 right-0 bg-white p-4">
          <div className="flex gap-2">
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              className="flex-1 border rounded-md px-4 py-2"
            />
            <button
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Cancel
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
