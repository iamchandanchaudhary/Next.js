# Server Actions and Mutations
Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

- Official Document: [Click Here](https://nextjs.org/docs/13/app/building-your-application/data-fetching/server-actions-and-mutations)


## Convention
A Server Action can be defined with the React "use server" directive. You can place the directive at the top of an async function to mark the function as a Server Action, or at the top of a separate file to mark all exports of that file as Server Actions.

## Server Components
Server Components can use the inline function level or module level "use server" directive. To inline a Server Action, add "use server" to the top of the function body:

``` javascript
// Server Component
export default function Page() {
  // Server Action
  async function create() {
    'use server'
 
    // ...
  }
 
  return (
    // ...
  )
}
```