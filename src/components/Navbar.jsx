import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { Link } from 'react-scroll';

const navigation = [
  { name: 'About Me', to: 'aboutme', current: false },
  { name: 'Skills', to: 'myskills', current: false },
  { name: 'Projects', to: 'myprojects', current: false },
  { name: 'Contact Me', to: 'contactme', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#1c1c1c] sticky top-0 z-20   border-b border-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-[#3fcf8e] focus:outline-none  focus:ring-inset ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to='header' spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} >
                    <VscAzure className='text-[#3fcf8e] text-3xl cursor-pointer' />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        spy={true}
                        smooth={true}
                        offset={45}
                        duration={500}
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? ' text-white' : 'text-gray-300 hover:text-[#3fcf8e]',
                          'rounded-md px-3 py-2 text-md font-semibold cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex gap-x-5'>
                <a href="https://github.com/Arslan6473" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-gray-300 text-2xl hover:text-[#3fcf8e] cursor-pointer' />
                </a>
                <a href="https://www.linkedin.com/in/arslan-sarwar64/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-gray-300 text-2xl hover:text-[#3fcf8e] cursor-pointer' />
                </a>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link to={item.to} spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500} >
                  <Disclosure.Button
                    key={item.name}
                    className={classNames(
                      item.current ? ' text-white' : 'text-gray-300 hover:text-[#3fcf8e]',
                      'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
