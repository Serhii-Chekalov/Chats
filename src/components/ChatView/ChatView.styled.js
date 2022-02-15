import styled from "@emotion/styled";

export const NameWrap = styled.div`
  background-color: #f6f6f4;
  border: 1px solid #c0c0c0;
  height: 60px;
`;

export const Name = styled.div`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4682b4;
`;

export const ChatWrap = styled.div`
  background-color: #fcfbfa;
  border: 1px solid #c0c0c0;
  padding: 10px;
  overflow-y: scroll;
  height: 500px;
`;

export const InputWrap = styled.div`
  background-color: #f6f6f4;
  border: 1px solid #c0c0c0;
  width: 100%;
  padding: 40px;
`;

export const Input = styled.input`
  padding: 20px;
  border-radius: 30px;
  width: 100vh;
`;

export const List = styled.ul`
  padding: 0 40px 0 0;
`;

export const MessageItem = styled.span`
  line-height: 1.2;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #2f4f4f;
  color: #ffffff;
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
      background-color:  #eee;
      color: #000000;
    }
  `}
`;
