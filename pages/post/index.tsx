import { Container } from '@/component/Container';
import { Button, Collapse, Fieldset, Link, Text } from '@geist-ui/core';
import { ArrowRight } from '@geist-ui/icons';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { postid } = router.query;
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
        <Collapse shadow title={`${postid}`} subtitle="author" width={100}>
          <Fieldset>
            <Fieldset.Title>제목입니다.</Fieldset.Title>
            <Fieldset.Subtitle>내용입니다.</Fieldset.Subtitle>
          </Fieldset>
        </Collapse>
      </div>
    </Container>
  );
}
