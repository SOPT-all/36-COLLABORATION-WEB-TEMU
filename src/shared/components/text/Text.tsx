import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { textStyle } from '@shared/components/text/Text.css';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tag?:
    | 'head_bold_60'
    | 'head_bold_28'
    | 'head_bold_24'
    | 'head_sb_24'
    | 'head_bold_20'
    | 'head_sb_20'
    | 'head_medium_20'
    | 'head_regular_20'
    | 'body_bold_18'
    | 'body_medium_18'
    | 'body_regular_18'
    | 'body_bold_16'
    | 'body_medium_16'
    | 'body_regular_16'
    | 'body_medium_15'
    | 'body_regular_15'
    | 'body_bold_14'
    | 'body_medium_14'
    | 'body_regular_14'
    | 'caption_bold_13'
    | 'caption_medium_13'
    | 'caption_regular_13'
    | 'caption_bold_12'
    | 'caption_medium_12'
    | 'caption_regular_12';
  color?:
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
}

const Text = ({
  tag = 'body_regular_16',
  color = 'black',
  children,
  className,
  ...props
}: TextProps) => {
  return (
    <p className={clsx(className, textStyle({ tag, color }))} {...props}>
      {children}
    </p>
  );
};

export default Text;
