import ComponentShowcasePage from '@/components/component-showcase-page'
import { DonationCard } from '@/components/donation-card/preview'

const Page = () => {
    return (
        <ComponentShowcasePage
            name="Donation Card"
            description="A simple card to display a donation campaign."
            preview={<DonationCard />}
            code={{ language: 'tsx', content: "Coming soon" }}
        />
    )
}

export default Page