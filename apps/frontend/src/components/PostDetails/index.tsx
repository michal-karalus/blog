import { useParams } from 'react-router-dom';

import { usePost } from '../../hooks/usePost';
import Container from '../common/Container';

import styles from './PostDetails.module.scss';

function PostDetails() {
  const { id } = useParams();

  const { data } = usePost(id as string);

  return (
    <Container>
      {data && (
        <>
          <h2 className={styles.title}>{data.attributes.title}</h2>
          <p className={styles.description}>{data.attributes.description}</p>
        </>
      )}
    </Container>
  );
}

export default PostDetails;