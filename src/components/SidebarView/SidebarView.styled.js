import styled from "@emotion/styled";


export const HeaderWrap = styled.div`
  background-color: #f6f6f4;
  border: 1px solid #c0c0c0;
  height: 120px;
`;

export const Head = styled.h3`
  display: block;
  color: #4682B4;
  margin-left: 25px;
  margin-top: 30px;
`;

export const Image = styled.img`
  display: block;
  color: #0000ff;
  margin-left: 20px;
  margin-top: 30px;
`;

export const Header = styled.div`
  margin-top: 20px;
  display: block;
  text-align: center;
`;

export const Input = styled.input`
  margin-top: 20px;
  margin-left: 25px;
  width: 70%;
  height: 35px;
  line-height: 30px;
  padding: 0 50px 0 20px;
  background-color: #ffff;
  border: 1px solid black;
  border-radius: 30px;
  color: black;
`;

export const List = styled.ul`
  padding: 20px;
`;

export const ListItem = styled.li`
  margin-top: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  display: block;
  padding: 20px;
  font-size: 12px;
  background-color: #fff;
  border-bottom: 1px solid #f00;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
  }
`;
