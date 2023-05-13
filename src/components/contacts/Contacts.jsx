import "./Contacts.css";

function Contact(props) {
  return (
    <div>
      <a className="linkBox" href={props.link} target="_blank" rel="noreferrer">
        <img className="image" src={props.image} alt={props.handle} />
        <div className="handle">{props.handle}</div>
        <img
          className="link"
          src="../../assets/External_Link_light.png"
          alt="link"
        />
      </a>
    </div>
  );
}

export default Contact;
