import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='border px-4 py-5 rounded-sm text-center'>
                <h2 className='text-2xl font-bold'>Not Found</h2>
                <p className='text-lg pb-5'>Could not find requested resource</p>

                <Link className='text-lg bg-gray-200 px-2 py-1' href="/">Return Home</Link>
            </div>
        </div>
    )
}