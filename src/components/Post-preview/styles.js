import Styled from 'styled-components';
import  Image from 'gatsby-image';
import { Link } from 'gatsby';

const PostArticle = Styled.article`
  border-bottom: 1px solid #ddd;
  display: flex;
  margin-top: 0;
  padding-bottom: 1rem;
  &:first-of-type {
        margin-top: 1rem;
      }
`;

const PostImage = Styled(Image)`
  > * { 
    margin-top: 0;
  }
`;

const PostLink = Styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 100px;
`;

export default PostArticle;
export { PostImage, PostLink };
