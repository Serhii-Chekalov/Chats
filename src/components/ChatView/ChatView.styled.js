import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 30px;
  width: 70vh;
`;

export const List = styled.ul`
  padding: 0 40px 0 0;
`;

export const MessageItem = styled.span`
  line-height: 1.2;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #eee;
  max-width: 80%;
`;

export const MessageWrap = styled.li`
  display: block;
  margin-bottom: 5px;

  ${(props) =>
    props.right &&
    `
    text-align: right;

    span {
      color: white;
      background-color: black;
    }
  `}
`;

export const MessagesCreator = styled.div`
  padding: 20px;
  color: green;
  line-height: 25px;
  max-width: 90%;

  text-align: right;
  border-radius: 5px;
`;
