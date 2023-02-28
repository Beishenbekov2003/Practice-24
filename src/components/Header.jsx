import styled from 'styled-components'
import { useEffect, useState } from 'react'
const Header = () => {
    const [color, setColor] = useState(true)
    const changeColor = () => {
        if (window.scrollY) {
            setColor(false)
            console.log(color)
        } else if (window.scrollY === 0) {
            setColor(true)
        }
    }

    useEffect(() => {
        changeColor()
        window.addEventListener('scroll', changeColor)
    })
    return (
        <StyledHeader colors={color}>
            <img
                src="https://peaksoft.house/_next/static/media/peaksoftIcon.ca71c421.svg"
                alt="logo"
            />
            <nav>
                <StyledUl>
                    <li>БАШКЫ БЕТ</li>
                    <li>IT КУРСТАР</li>
                    <li>CТУДЕНТТЕРДИН ПРОЕКТТЕРИ</li>
                    <li>ЖУМУШКА ОРНОШТУРУУ</li>
                    <li>БАЙЛАНЫШУУ</li>
                    <Container>
                        <li>
                            <img
                                src="https://peaksoft.house/_next/static/media/DateAndTimeIcon.76f454e1.svg"
                                alt="icon"
                            />
                            ДШ - ЖМ 10:00 - 18:00
                        </li>
                        <li>
                            <img
                                src="https://peaksoft.house/_next/static/media/CommunicationIcon.9a1846d4.svg"
                                alt="icon"
                            />
                            +996 500 34 44 33
                        </li>
                    </Container>

                    {!color && (
                        <li>
                            {' '}
                            <Button>МААЛЫМАТ АЛУУ</Button>{' '}
                        </li>
                    )}
                </StyledUl>
            </nav>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px 50px;
    position: fixed;
    background-color: ${(props) => (props.colors ? 'blue' : 'white')};
    top: 0;
    left: 0;
    color: #0d012b;
    nav {
        display: flex;
        justify-content: space-between;
    }
`
const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
 width: 1300px;
    li {
        /* margin-left: 30px; */
        font-weight: 900;
        cursor: pointer;
        :hover {
            color: #080395;
        }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    li {
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
`
const Button = styled.button`
    ${(props) => (props.color ? { display: 'none' } : { display: 'block' })}
    padding: 10px 20px;
    color: white;
    background-color: #13c506;
    border-radius: 10px;
    border: none;
    :hover {
        background-color: #053efb;
    }
`
