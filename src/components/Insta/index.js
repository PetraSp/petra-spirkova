import React from "react";
import InstaWrapper, { InstaLink, InstaImage } from "./styles.js";
import useInstagram from "../../hooks/use-instagram";

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <>
      <h2>Instagram posts from @petraspirk</h2>
      <InstaWrapper>
        {instaPhotos.map(photo =>
          <InstaLink key={photo.id} href={`https://instagram.com/p/${photo.id}/`}>
            <InstaImage
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </InstaLink>
        )}
      </InstaWrapper>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
