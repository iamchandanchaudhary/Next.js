import ClientFile from "@/components/ClientFile";
import fs from "fs/promises";

export default function Home() {

  let a = fs.readFile(".gitignore");
  a.then((e) => console.log(e.toString())) // ==> it was a server side data

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold">Client & Server Component</h1>

      {/* You can run your client side component in Your Server Side component by placing them into different components */}
      <ClientFile />
    </div>
  );
}
