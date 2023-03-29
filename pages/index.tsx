import { Button, Textarea } from '@geist-ui/core';

import styled from '@emotion/styled';
import classNames from 'classnames';
import { Container } from '@/component/Container';
import { useState } from 'react';
import axios from 'axios';
import { type } from 'os';
import Link from 'next/link';

type Formdata = {
  author: string;
  title: string;
  content: string;
};

export default function Home() {
  const [formdata, setFormData] = useState<Formdata>({
    author: '',
    title: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formdata);

    try {
      const res = await axios({
        url: '/',
        method: 'post',
        data: formdata,
      });

      console.log("결과 : ", res);
    } catch (e) {
      console.log(e);
    }

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
        <Link href='/post'>
          <span className={classNames('font-black', 'text-6xl', 'text-gray-200',
            'hover:opacity-80',
            'hover:cursor-pointer',)}
          >
            DODOFIN
          </span>
        </Link>

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
            value={formdata.author}
            onChange={handleChange}
            className={classNames('text-white')}
          />

          <Textarea
            placeholder="title"
            name="title"
            value={formdata.title}
            onChange={handleChange}
            className={classNames('text-white')}
          />

          <Textarea
            placeholder="content"
            name="content"
            value={formdata.content}
            onChange={handleChange}
            className={classNames('text-white')}
          />
          <Button
            type="error"
            onClick={() => {
              setFormData({
                author: '',
                title: '',
                content: '',
              });
            }}
          >
            초기화
          </Button>

          <input
            type="submit"
            value="등록"
            className={classNames(
              'w-full',

              'border-2',
              'border-gray-400',
              'bg-gray-400',
              'text-white',

              'p-2',
              'font-light',
              'text-sm',
              'rounded-md',

              'hover:cursor-pointer',
              'hover:bg-inherit',

              'transition',
              'hover:ease-in',
              'hover:duration-100'

            )}
          />
        </form>
      </div>
    </Container>
  );
}
