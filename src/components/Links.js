import Link from "./Link";


const Links = () => {

  return (
    <div className="links">
      <Link href="/">Start page</Link><br/>
      <Link href="/unsplash">Unsplash</Link> <br/>
      <Link href="/change-color">Color sweeper</Link><br/>
      <Link href="/counter">Counter</Link><br/>
      <Link href="/wikipedia">Wikipedia</Link><br/>
      <Link href="/select-color">Select a color</Link><br/>
      <Link href="/translate">Translate</Link>
    </div>
  );
}

export default Links;
