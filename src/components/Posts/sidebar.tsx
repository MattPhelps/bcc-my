import Link from "next/link";

export default function Sidebar({ posts }) {
  return (
    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-neutral-800">
      <div className="sticky top-0 start-0 py-8 lg:ps-8">
        {/* <!-- Avatar Media --> */}
        <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-neutral-700">
          {/* <a className="block flex-shrink-0" href="#">
                  <img className="size-10 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
              </a>
               */}
          <Link className="group grow block" href="">
            <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
              Matt Phelps
            </h5>
            <p className="text-sm text-gray-500 dark:text-neutral-500">CEO</p>
          </Link>
        </div>
        {/* <!-- End Avatar Media --> */}

        <div className="space-y-6">
          {/* <!-- Media --> */}
          <Link className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                5 Reasons to Not start a UX Designer Career in 2022/2023
              </span>
            </div>

            {/* <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                      <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"/>
                     </div> */}
          </Link>
          {/* <!-- End Media --> */}

          {/* <!-- Media --> */}
          <Link className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                If your UX Portfolio has this 20% Well Done, it Will Give You an
                80% Result
              </span>
            </div>

            {/* <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                  <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"/>
                  </div> */}
          </Link>
          {/* <!-- End Media --> */}

          {/* <!-- Media --> */}
          <Link className="group flex items-center gap-x-6" href="#">
            <div className="grow">
              <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                7 Principles of Icon Design
              </span>
            </div>

            {/* <div className="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
                   <img className="size-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"/>
                   </div> */}
          </Link>
          {/* <!-- End Media --> */}
        </div>

{/* THIS IS THE CODE THAT RENDERS DYNAMICALLY POSTS IN THE SIDBAR */}
{/* uncomment it if you want to use it and comment everything from <!-- End Avatar Media --> to this comment */}

        {/* <div className="space-y-6">
          {posts.map((post) => (
            <Link className="group flex items-center gap-x-6" href={`/blog/${post.node.slug}`}>
              <div className="grow">
                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500">
                  {post.node.title}
                </span>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}
