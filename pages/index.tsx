import { Button, Textarea } from "@geist-ui/core";

import styled from "@emotion/styled"
import classNames from "classnames";

export default function Home() {
  return (
    <Container className={classNames(
      'w-full',
      'h-screen',

      'flex',
      'flex-col',

      'justify-center',
      'items-center',

      'gap-y-8',

    )}>
      <div className={classNames(
        'flex',

        'justify-center',
        'items-center',
      )}>
        <span className={classNames('font-black', 'text-6xl', 'text-gray-200')}>DODOFIN</span>
      </div>

      <div>
        <form
          className={classNames(
            'w-full',

            'flex',
            'flex-col',

            'gap-y-4',)}
          
          method="POST"
          action="/api/todolist"
        >
          <Textarea placeholder="id" className={classNames(
            'text-white',
          )} />


          <Textarea placeholder="title" className={classNames(
            'text-white',
          )} />


          <Textarea placeholder="content" className={classNames(
            'text-white',
          )} />

          <Button type="success" auto>등록</Button>
        </form>
      </div>

      <div>
        {/* 투두리스트 폼 */}
      </div>
    </Container>
  )
}
const Container = styled.div({
  maxWidth: '1248px',
  minWidth: '368px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 24px',
  boxSizing: 'border-box',
});