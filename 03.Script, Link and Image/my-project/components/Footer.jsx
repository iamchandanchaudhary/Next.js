import Link from "next/link";

function Footer() {
  return (
    <div className='w-full bg-gray-800 flex justify-between py-4 px-8 text-sm'>
      <p className=''>All rights reversed</p>

      <div className='flex gap-4'>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  )
}

export default Footer;
