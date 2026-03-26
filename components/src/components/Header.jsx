const dynamicName = ["Vikas", "Amulya", "Raja", "Shan", "Skanda"];

function getRandomIndex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header(props) {
  const name = dynamicName[getRandomIndex(4)];
  return (
    <section className="header">
      <img src={props.image} alt={props.title}/>
      <h1>{props.title} - {name} - from - {props.place}</h1>
    </section>
  );
}
export default Header;
