import './Person.scss';
interface Props {
  url: string;
  name: string;
  online: boolean;
  lastActive: string;
}

const Person = (props: Props) => {
  return (
    <div className="person">
      <div className="person-details">
        <img src={props.url} alt="avatar" className="imgpe" />
        <span className="namepe">{props.name}</span>
      </div>
      <div className="status">
        {props.online ? (
          <div className="online"></div>
        ) : (
          <span className="last-active">{props.lastActive}</span>
        )}
      </div>
    </div>
  );
};

export default Person;
