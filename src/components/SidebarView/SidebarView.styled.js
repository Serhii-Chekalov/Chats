import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  background-color: #f6f6f4;
  border: 1px solid #c0c0c0;
  height: calc(100vh - 600px);
`;

export const Head = styled.h3`
  display: block;
  color: #4682b4;
  margin: 30px 0px 0px 25px;
`;

export const Name = styled.h2`
  margin: 0;
  display: inline-block;
  vertical-align: top;
`;

export const Message = styled.h3`
  margin: 0;
  font-size: 12px;
  color: #7e818a;
  margin-top: 12px;
  font-weight: normal;
`;

export const Header = styled.div`
  margin-top: 20px;
  display: block;
  margin-left: 25px;
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
  overflow-y: scroll;
  height: calc(100vh - 220px);
  margin-top: 30px;
`;

export const ListItem = styled.li`
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  display: block;
  padding: 10px;
  font-size: 12px;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid #c0c0c0;

  &:hover {
    background-color: #eee;
  }
`;
