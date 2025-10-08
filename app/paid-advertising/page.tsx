import { Metadata } from 'next'
import PaidAdvertisingPage from './PaidAdvertisingPage'

export const metadata: Metadata = {
  title: 'Paid Advertising Services | AI-Powered Google, Facebook & LinkedIn Ads',
  description: 'Launch high-converting ad campaigns on Google Ads, Facebook Ads, and LinkedIn Ads. AI-powered targeting, optimization, and ROI tracking. Get your free campaign audit today.',
  keywords: 'paid advertising, google ads, facebook ads, linkedin ads, ppc management, ad campaign management, social media advertising, paid search',
  openGraph: {
    title: 'AI-Powered Paid Advertising Services | Google, Facebook & LinkedIn Ads',
    description: 'Launch data-driven ad campaigns that convert. AI-powered targeting and optimization across Google, Facebook, and LinkedIn.',
    type: 'website',
  },
}

export default function Page() {
  return <PaidAdvertisingPage />
}
