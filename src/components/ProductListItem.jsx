import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 100px;
    background-color: dodgerblue;
    padding: 20px;
    margin: 10px;
    `
const Button = styled.button`
    height: 30px;
    padding: 10px;
`

function ProductListItem(){
    return(
        <Box>
            product list item
            <Button>Press Me</Button>
        </Box>
        
    )
}

export default ProductListItem;