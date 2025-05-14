import OpretEventForm from "../../components/kurator/OpretEventForm";
import SearchArt from "../../components/kurator/SearchArt";

import Test from "../../components/Test";

export default function Page() {
  return (
    <div>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Opret Event</h1>
        <OpretEventForm />
      </div>
      <Test></Test>
    </div>
  );
}
