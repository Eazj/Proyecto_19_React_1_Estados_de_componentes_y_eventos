function SocialButton(props) {
  return (
    <>
      <div className="social_logo">
        <img src={props.imagen} alt={props.descripcion} />
      </div>
    </>
  );
}
export default SocialButton;
