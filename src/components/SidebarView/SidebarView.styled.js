import styled from "@emotion/styled";

export const Head = styled.strong`
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
  margin-left: 60px;
  width: 50%;
  height: 30px;
  line-height: 30px;
  padding: 0 50px 0 20px;
  background-color: #eee;
  border: none;
  border-radius: 3px;
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
  border: 1px solid grey;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
  }
`;
