import type { Metadata } from 'next'
import ComponentShowcasePage from '@/components/component-showcase-page'
import { ConnectWallet } from '@/components/connect-wallet/preview'
import path from 'path'
import fs from 'fs'

const Page = () => {
    const codePath = path.join(process.cwd(), 'components', 'connect-wallet', 'code-sample.tsx')
    const codeSample = fs.readFileSync(codePath, 'utf8')
    return (
        <ComponentShowcasePage
            name="Connect Wallet"
            description="A simple button to connect a wallet."
            preview={<ConnectWallet />}
            code={{ language: 'tsx', content: codeSample }}
            dependencies={['@solana/wallet-adapter-react', '@solana/wallet-adapter-base', '@solana/wallet-adapter-react-ui', '@solana/wallet-adapter-wallets', '@solana/web3.js']}
            notes={[
                "Set the NEXT_PUBLIC_ALCHEMY_RPC_URL environment variable to your Alchemy RPC URL. You can get one by signing up at https://www.alchemy.com",
            ]}
        />
    )
}

export default Page

export const metadata: Metadata = {
    title: 'Connect Wallet',
    description: 'A simple button to connect a wallet.',
}