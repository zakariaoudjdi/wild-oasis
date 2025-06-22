export default async function CabinsPage() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return (
    <div>
      <h1>Cabins</h1>
      <p>Welcome to the Cabins page!</p>
      <p>Here you can find information about our cabins.</p>
    </div>
  );
}
