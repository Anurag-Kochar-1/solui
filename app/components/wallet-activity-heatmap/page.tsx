import React from 'react'
import ComponentShowcasePage from '@/components/component-showcase-page'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WalletActivityPreview = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Wallet Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 7 * 12 }).map((_, i) => (
                        <div key={i} className="h-4 w-4 rounded-sm bg-primary/20" />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

const codeSample = `import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WalletActivityHeatmap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Activity Heatmap</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 84 }).map((_, i) => (
            <div key={i} className="h-4 w-4 rounded-sm bg-primary/20" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`

const Page = () => {
    return (
        <ComponentShowcasePage
            name="Wallet Activity Heatmap"
            description="A simple grid-based heatmap to visualize wallet activity over time."
            preview={<WalletActivityPreview />}
            code={{ language: 'tsx', content: codeSample }}
            dependencies={[ 'react', 'react-dom' ]}
            devDependencies={[ 'react-syntax-highlighter' ]}
            notes={[
                'Replace the placeholder grid with real activity data.',
                'Use a color scale to represent intensity.',
                'Make the component responsive and accessible.'
            ]}
        />
    )
}

export default Page