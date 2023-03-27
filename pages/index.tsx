import { Button, Textarea } from '@geist-ui/core';

import styled from '@emotion/styled';
import classNames from 'classnames';
import { Container } from '@/component/Container';
import { useMemo, useState } from 'react';

export default function Home() {
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      author,
      title,
      content,
    };

    console.log(data);
  };
  return (
    <Container
      className={classNames(
        'w-full',
        'h-screen',

        'flex',
        'flex-col',

        'justify-center',
        'items-center',

        'gap-y-8'
      )}
    >
      <div
        className={classNames(
          'flex',

          'justify-center',
          'items-center'
        )}
      >
        <span className={classNames('font-black', 'text-6xl', 'text-gray-200')}>
          DODOFIN
        </span>
      </div>

      <div>
        <form
          className={classNames(
            'w-full',

            'flex',
            'flex-col',

            'gap-y-4'
          )}
          onSubmit={handleSubmit}
        >
          <Textarea
            placeholder="author"
            name="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className={classNames('text-white')}
          />

          <Textarea
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={classNames('text-white')}
          />

          <Textarea
            placeholder="content"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className={classNames('text-white')}
          />
          <Button
            type="error"
            onClick={() => {
              setAuthor('');
              setTitle('');
              setContent('');
            }}
          >
            초기화
          </Button>

          <input
            type="submit"
            value="백엔드로"
            className={classNames(
              'w-full',

              'border',
              'border-gray-500',
              'text-white',

              'p-2',
              'font-extralight',
              'text-sm',
              'rounded-md'
            )}
          />
        </form>
      </div>

      <div>{/* 투두리스트 폼 */}</div>
    </Container>
  );
}
