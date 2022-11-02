import styled from 'styled-components';
import Link from 'next/link';

export const TextLink = ({href, target, children}) => (
        <LinkEffect href={href} target={target ?? '_blank'}>
            {children}
        </LinkEffect>
    )

const LinkEffect = styled(Link)`
    text-decoration: none;
    color: #2B2C34;
    position: relative;
    font-weight: 700;
    z-index:2;

    &:hover::before {
        bottom: 0;
        height: 100%;
      }

    &:before {
    content: '';
    background-color: hsla(250, 80%, 60%, .50);
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 5px;
    z-index: -1;
    transition: all .3s ease-in-out;
  }

`
