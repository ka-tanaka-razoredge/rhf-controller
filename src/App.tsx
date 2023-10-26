import { FC } from 'react';
import * as z from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Twins from './Twins';

import './style.css';

const schema = z
  .object({
    id: z.string().min(1, 'Ipupt Identifier'),
    password: z.string().min(1, 'Required password'),
    again: z.string().min(1, 'Required again'),
  })
  .refine(({ password, again }) => {}, {
    message: 'not correspond',
    path: ['again'],
  });

type Schema = z.infer<typeof schema>;

export const App: FC<{ name: string }> = ({ name }) => {
  const { control } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  });

  return (
    <div>
      <Controller
        control={control}
        name="id"
        render={({ field }) => <input />}
      />
      <Twins control={control} />
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
