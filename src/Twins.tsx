import React from 'react';
import { Controller } from 'react-hook-form';

export default (control) => {
  return (
    <>
      <Controller
        control={control}
        name="password"
        render={({ field }) => <input name="password" />}
      />
      <Controller
        control={control}
        name="again"
        render={({ field }) => <input name="again" />}
      />
    </>
  );
};
