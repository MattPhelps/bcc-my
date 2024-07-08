import Link from 'next/link'
import { JSX, SVGProps } from 'react';
import siteConfig from '../../../../siteConfig';
 
export default function NotFound() {

    const BugIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m8 2 1.88 1.88" />
            <path d="M14.12 3.88 16 2" />
            <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
            <path d="M12 20v-9" />
            <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
            <path d="M6 13H2" />
            <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
            <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
            <path d="M22 13h-4" />
            <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
          </svg>
        );
    };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-[#f3f4f6] dark:bg-gray-900">
    <div className="w-full max-w-md px-4 py-8 shadow-md rounded-lg">
      <div className="flex justify-center items-center">
        <BugIcon className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-3xl font-semibold text-center py-4 ">
        404 Page not found
      </h2>
      <p className="text-md text-center  pb-2">
      Oops! The page you are looking for does not exist. It may have been moved or deleted.
      </p>
      <div className="flex justify-center items-center mt-6">
     <Link  style={{ "--main-color": siteConfig.buttonColor } as any}
      className="button-styling bg-blue-500 inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
      href="/">Return Home</Link>
      </div>
      </div>
    </div>
  )
}