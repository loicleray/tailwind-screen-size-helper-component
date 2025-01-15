export default function TailwindSizeHelper() {
  return (
    <div className="fixed bottom-1 right-1 z-50 rounded-full bg-red-400 px-2 font-display font-semibold text-gray-900 outline outline-1 outline-gray-900">
      <span className="block sm:hidden">Smallest</span>
      <span className="hidden sm:block md:hidden">Small</span>
      <span className="hidden md:block lg:hidden">Medium</span>
      <span className="hidden lg:block xl:hidden">Large</span>
      <span className="hidden xl:block">Largest</span>
    </div>
  )
}
