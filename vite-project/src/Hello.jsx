function Hello() {
  let username = "sartaj hajam";
  let userfullname = () => {
    return username;
  };
  return (
    <div>
      <h3>This is Your react Instructor {userfullname()}</h3>
    </div>
  );
}

export default Hello;
