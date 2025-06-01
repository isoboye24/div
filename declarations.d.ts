// declarations.d.ts
declare module 'react-world-flags' {
  import * as React from 'react';
  const Flag: React.ComponentType<{
    code: string;
    style?: React.CSSProperties;
    className?: string;
  }>;
  export default Flag;
}
