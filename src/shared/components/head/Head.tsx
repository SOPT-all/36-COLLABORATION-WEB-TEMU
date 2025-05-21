import clsx from 'clsx';
import { type ComponentPropsWithRef } from 'react';
import { headStyle } from '@/shared/components/head/Head.css';

type HeadLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadTag =
  | 'head_bold_60'
  | 'head_bold_28'
  | 'head_bold_24'
  | 'head_sb_24'
  | 'head_bold_20'
  | 'head_sb_20'
  | 'head_medium_20'
  | 'head_regular_20';
type HeadColor =
  | 'white'
  | 'black'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'gray5'
  | 'gray6'
  | 'gray7'
  | 'gray8'
  | 'gray8_30'
  | 'point_red'
  | 'point_orange'
  | 'point_orange2'
  | 'point_green';

export interface HeadProps extends ComponentPropsWithRef<'h1'> {
  level?: HeadLevel;
  tag?: HeadTag;
  color?: HeadColor;
}

const HeadTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
} as const;

const Head = ({
  level = 'h1',
  tag = 'head_bold_24',
  color = 'black',
  className,
  children,
  ref,
  ...props
}: HeadProps) => {
  const Tag = HeadTagMap[level];

  return (
    <Tag className={clsx(className, headStyle({ tag, color }))} ref={ref} {...props}>
      {children}
    </Tag>
  );
};

export default Head;
