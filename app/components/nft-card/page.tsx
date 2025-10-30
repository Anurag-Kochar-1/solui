import ComponentShowcasePage from '@/components/component-showcase-page'
import path from 'path'
import fs from 'fs'
import { NFTCard } from '@/components/nft-card/preview'

const Page = () => {
    const codePath = path.join(process.cwd(), 'components', 'nft-card', 'code-sample.tsx')
    const codeSample = fs.readFileSync(codePath, 'utf8')
    return (
        <ComponentShowcasePage
            name="NFT Card"
            description="A simple card to display an NFT minted on Solana."
            preview={<NFTCard mintAddress="2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv" />}
            code={{ language: 'tsx', content: codeSample }}
            dependencies={['@solana/web3.js', 'framer-motion']}
            notes={[
                "Set the NEXT_PUBLIC_HELIUS_API_KEY environment variable to your Helius API key. You can get one by signing up at https://helius.dev",
            ]}
        />
    )
}

export default Page