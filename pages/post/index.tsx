import { Container } from '@/component/Container';
import { Button, Collapse, Fieldset, Link } from '@geist-ui/core';
import { ArrowRight, Edit3, Trash2 } from '@geist-ui/icons';
import classNames from 'classnames';

export default function Page() {
  return (
    <Container
      className={classNames(
        'w-full',
        'h-screen',

        'flex',
        'flex-col',

        'items-center',

        'gap-y-10'
      )}
    >
      <div
        className={classNames(
          'w-full',
          'flex',
          'justify-end',
          'items-center',

          'py-10'
        )}
      >
        <Link href={'/'}>
          <Button icon={<ArrowRight />} width={1} iconRight>
            뒤로 가기
          </Button>
        </Link>
      </div>

      <div
        className={classNames(
          'w-full',

          'flex',
          'justify-center',
          'items-center',

          'font-light',
          'text-lg',

          'border-y',
          'border-gray-500',
          'py-5'
        )}
      >
        <div>게시판</div>
      </div>

      <div
        className={classNames(
          'w-full',
          'h-full',

          'flex',
          'justify-start',
          'items-start',

          'font-light',
          'text-md'
        )}
      >
        <Collapse shadow title='test' subtitle="author" width={100}>
          <Fieldset>
            <div className={classNames(
              'w-full',

              'flex',
              'justify-between',
              'items-center',

              'gap-x-2',
            )}>

              <Fieldset.Title>제목입니다.</Fieldset.Title>
              <div className={classNames('gap-x-2', 'w-1/2',
                'flex',
                'justify-end',
                'items-center'

              )}>

                <Button icon={<Edit3 />} width={'3%'} />
                <Button icon={<Trash2 />} width={'3%'} />
              </div>
            </div>
            <div>
              <Fieldset.Subtitle>내용입니다.</Fieldset.Subtitle>
            </div>
          </Fieldset>
        </Collapse>
      </div>
    </Container>
  );
}
