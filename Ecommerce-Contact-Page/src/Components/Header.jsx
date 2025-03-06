import styled from "styled-components"

const Header = () => {
  return (
    <ContactHead>
      <ContactImage src="https://s3-alpha-sig.figma.com/img/5f58/2a30/fd63de4356dc476c037adbb202ffa6fe?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cURkdxX~HjR0OU6Y8CvySYUhOlefvJI7n9R0C5l9YlDwriD8yTr7wX49UVHfW6BU5YszDfn7AIq~VpYL-j1-vkmr3xmv-PExLkEpeJhKgjSdE9Ot0JiFx2FK31fZFgpUvgLk7q2-DQrmetr2lW0tE78IaX9nQxu-uEHrhKYSfCyxHFUCYWQbDqowxFhBHdNafh8wpg9xNceEXWs9Jw4EA8CQe-uwjeCM6~5ggrWb2XhnqihOGl3rxgSTDH7T31bitrmytkBQU7VNVlT2uZKyGRfV0xBG3MWJ6~lElVhL7xq2GSZHbN~jwq~eSPcqlrvgjG5-C5Yx2PvggoT2X6sdsw__" 
      alt="" />
    </ContactHead>
  )
}

export default Header

const ContactHead = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
`;
const ContactImage = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 80px;
`;