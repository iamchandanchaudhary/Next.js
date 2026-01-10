import Link from "next/link"; // ==> Link Tag help us to open the other route without reloading the page 

function Navbar() {
  return (
    <div className='w-full bg-gray-800 flex justify-between py-4 px-10'>
      <p>Chandan</p>

      <div className='flex gap-8'>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Navbar;
