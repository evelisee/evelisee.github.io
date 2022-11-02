import styled from 'styled-components';

export const ContainerGrid = ({children}) => (
    <Container>
        {children}
    </Container>
)

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
gap: 1rem;

    @media (max-width: 1210px) {
        max-width: 90%
  }
`
