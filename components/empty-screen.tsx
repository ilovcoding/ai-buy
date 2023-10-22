import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: '商品测评',
    message: `小米13使用测评?\n`
  },
  {
    heading: '购物推荐',
    message: '推荐几款冰箱: \n'
  },
  {
    heading: '专业对比',
    message: `RTX4080显卡 和 RTX7900XT 应该选购哪个？ \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hi 我是小快
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          您的专属购物小助手.
        </p>
        <p className="leading-normal text-muted-foreground">
          您可以试试下面的的问题比如:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
