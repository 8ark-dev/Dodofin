import { Container } from '@/component/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button, Collapse, Fieldset, Link } from '@geist-ui/core';
import { ArrowRight, Edit3, Trash2 } from '@geist-ui/icons';
import classNames from 'classnames';

export default function Page() {
  const [post, setPost] = useState<any[]>([]);
  
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

                  <Fieldset.Title>{v.title}</Fieldset.Title>
                  <div className={classNames('gap-x-2', 'w-1/2',
                    'flex',
                    'justify-end',
                    'items-center'

                  )}>

                    <Button icon={<Edit3 />} width={'3%'} />
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
                <div>
                  <Fieldset.Subtitle>{v.content}</Fieldset.Subtitle>
                </div>
              </Fieldset>
            </Collapse>
          </div>
        ))
      }
    </Container>
  );
}
