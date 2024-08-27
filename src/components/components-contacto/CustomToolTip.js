'use client';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';
import './styles.css';

export const CustomTooltip = ({ children, webRef, contentText }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Link
            href={webRef}
            target='_blank'
            className='link-decoration'
          >
            {children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className='TooltipContent'>
            {contentText}
            <Tooltip.Arrow className='TooltipArrow' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default CustomTooltip;
