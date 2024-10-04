import { 
    FacebookShareButton, 
    FacebookIcon, 
    LineShareButton, 
    LineIcon,
    LinkedinShareButton, 
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';

  const url = 'https://daiki0721.github.io/illust2picture/';
  const title = 'Illust2Picture'


  export default function SNS(props) {
      return (
        <div>
          <FacebookShareButton url={props.url} title={props.title}>
            <FacebookIcon size={50} round />
          </FacebookShareButton>
    
          <LineShareButton url={url} title={title} >
            <LineIcon size={50} round />
          </LineShareButton>
    
          <LinkedinShareButton url={url} title={title} >
            <LinkedinIcon title={title} size={50} round />
          </LinkedinShareButton>
    
          <TwitterShareButton url={url} title={title} >
            <TwitterIcon size={50} round />
          </TwitterShareButton>
        </div>
      )
    }