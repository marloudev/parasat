import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Drawer({ isOpen, setIsOpen, children }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      {/* Backdrop transition */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/50 transition-opacity data-[closed]:opacity-0 data-[enter]:opacity-100 data-[leave]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out sm:duration-500 data-[closed]:translate-x-full data-[enter]:translate-x-0 data-[leave]:translate-x-full"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                {/* Drawer Header */}
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">Close drawer</span>
                        <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Drawer Content */}
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  {children}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
