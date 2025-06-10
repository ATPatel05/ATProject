// app/not-found.js

export default function NotFound() {
   return (
      <div style={{ padding: "50px", textAlign: "center" }}>
         <h1 style={{ fontSize: "3rem", color: "red" }}>404 - Page Not Found</h1>
         <p style={{ fontSize: "1.2rem" }}>
            Sorry, the page you are looking for does not exist.
         </p>
      </div>
   );
}

