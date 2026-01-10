export default function RootLayout({ children }) {
  return (
    <>
        <h1 className="bg-white">Hello I'm under the About page.</h1>
        {children}
    </>
  );
}