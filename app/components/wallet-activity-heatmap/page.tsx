import ComponentShowcasePage from '@/components/component-showcase-page'
import { WalletActivityHeatmap } from '@/components/wallet-activity-heatmap'

const codeSample = `


`

const Page = () => {
    return (
        <ComponentShowcasePage
            name="Wallet Activity Heatmap"
            description="A simple grid-based heatmap to visualize wallet activity over time."
            preview={<WalletActivityHeatmap address="7mhcgF1DVsj5iv4CxZDgp51H6MBBwqamsH1KnqXhSRc5" />}
            code={{ language: 'tsx', content: codeSample }}
            dependencies={['dayjs', 'framer-motion']}
            devDependencies={[]}
            notes={[
                "This component requires a Helius API key. You can get one by signing up at https://helius.dev",
            ]}
        />
    )
}

export default Page