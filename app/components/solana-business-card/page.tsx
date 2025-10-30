import ComponentShowcasePage from '@/components/component-showcase-page'
import { SolanaBusinessCard } from '@/components/solana business card/preview'
import fs from 'fs'
import path from 'path'

const Page = () => {
    return (
        <ComponentShowcasePage
            name="Solana Business Card"
            description="A business card for a Solana."
            preview={<SolanaBusinessCard />}
            code={{ language: 'tsx', content: "Coming soon" }}
        />
    )
}

export default Page