import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
}

export default function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <div className="bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-slate-700 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <Image src={image || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full" />
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-slate-500 text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
