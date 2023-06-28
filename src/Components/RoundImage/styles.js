import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ $size }) => (`${$size}rem`)};
  height: ${({ $size }) => (`${$size}rem`)};
  

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
