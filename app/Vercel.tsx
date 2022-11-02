import Image from 'next/image'

export default function Vercel() {
  return (
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-1"
    >
      <span>Powered by</span>
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  )
}
