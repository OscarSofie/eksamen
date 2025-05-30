
import { Suspense } from "react";
import Bestilling from "../components/Bestilling";



export default function Page() {
 
  return (
    <Suspense fallback={<div>Indlæser bestilling...</div>}>
      <Bestilling />
    </Suspense>
  );
}
