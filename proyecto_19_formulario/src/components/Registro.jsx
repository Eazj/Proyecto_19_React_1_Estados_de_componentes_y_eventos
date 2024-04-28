import FacebookSvg from '../assets/facebook.svg';
import GitHubSvg from '../assets/github.svg';
import LinkedInSvg from '../assets/linkedin-in.svg';
import SocialButton from "./SocialButton";

function Registro() {
  return (
    <>
      <div className="container_social">
        <SocialButton imagen={FacebookSvg} descripcion="Facebook Logo" />
        <SocialButton imagen={GitHubSvg} descripcion="GitHub Logo" />
        <SocialButton imagen={LinkedInSvg} descripcion="LinkedIn Logo" />
      </div>
    </>
  );
}
export default Registro;
