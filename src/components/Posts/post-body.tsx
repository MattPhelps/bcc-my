export default function PostBody({ content }) {
  return (
    <div className="text-lg text-gray-800 dark:text-neutral-200"dangerouslySetInnerHTML={{ __html: content }} ></div>
  );
}
