import { Container } from '@/component/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button, Collapse, Fieldset, Link } from '@geist-ui/core';
import { ArrowRight, Edit3, Trash2 } from '@geist-ui/icons';
import classNames from 'classnames';

export default function Page() {
  const [post, setPost] = useState<any[]>([]);
  const [isedit, setIsedit] = useState<boolean>(false);

  // 수정 데이터 저장
  const [editTitle, setEditTitle] = useState<string>('');
  const [editContent, setEditContent] = useState<string>('');

  useEffect(() => {
    async function getPost() {
      const res = await axios({
        url: 'http://localhost:8080/post',
        method: 'get',
      }).then(
        (res) => {
          setPost(res.data);
        }
      )
        .catch((e) => {
          console.log(e);
        });
    }
    getPost();
    console.log(post);
  }, []);

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
      {
        post.map((v, index) => (
          <div key={index}
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
            <Collapse shadow title={v.id} subtitle={v.title} width={100}>
              <Fieldset>
                <div className={classNames(
                  'w-full',

                  'flex',
                  'justify-between',
                  'items-center',

                  'gap-x-2',
                )}>

                  <Fieldset.Title>
                    {isedit ? (
                      <input placeholder={v.title} 
                      onChange={(e) => {
                        setEditTitle(e.target.value);
                      }}
                      disabled={false} 
                      className={classNames(
                        'w-full',
                        'h-full',

                        'bg-inherit',

                        'border-0',
                        'outline-none',

                        'text-2xl',
                        'font-bold',
                      )} />
                    ) : v.title}
                  </Fieldset.Title>
                  <div className={classNames('gap-x-2', 'w-1/2',
                    'flex',
                    'justify-end',
                    'items-center'

                  )}>

                    <Button icon={<Edit3 />} width={'3%'} onClick={() => setIsedit(!isedit)} />
                    <Button icon={<Trash2 />} width={'3%'} onClick={() => {
                      (async () => {
                        const res = await axios({
                          url: 'http://localhost:8080/post',
                          method: 'delete',
                          data: {
                            id: v.id,
                          },
                        }).then(
                          (res) => {
                            alert('삭제완료');
                            window.location.href = '/post';
                          }
                        )
                          .catch((e) => {
                            console.log(e);
                          });
                      }
                      )();
                    }} />
                  </div>
                </div>
                <div className={classNames('my-5')}>
                  <Fieldset.Subtitle>
                    {isedit ? (
                      <input
                        placeholder={v.content}
                        disabled={false}
                        onChange={(e) => {
                          setEditContent(e.target.value);
                        }}
                        className={classNames(
                          'w-full',
                          'h-full',

                          'bg-inherit',

                          'border-0',
                          'outline-none',

                          'text-lg',
                          'font-bold',
                        )} />

                    ) : v.content}
                  </Fieldset.Subtitle>
                </div>
                {isedit && (
                  <Button width={'10%'} onClick={
                    (async () => {
                      const res = await axios({
                        url: 'http://localhost:8080/post',
                        method: 'put',
                        data: {
                          id: v.id,
                          title: editTitle,
                          content: editContent,
                        },
                      }).then(
                        (res) => {
                          alert('수정완료');
                          window.location.href = '/post';
                        }).catch((e) => {
                          console.log(e);
                        });
                    })}>저장</Button>
                )}
              </Fieldset>
            </Collapse>
          </div>
        ))
      }
    </Container>
  );
}
