export default function Tags({ post }) {
  return (
    <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
      {/* <!-- Badges/Tags --> */}
      <div>
        {post.tags.edges.map(({ node }) => (
          <p
            key={node.id}
            className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
          >
            {node.name}
          </p>
        ))}
      </div>
      {/* <!-- End Badges/Tags --> */}
    </div>
  );
}
