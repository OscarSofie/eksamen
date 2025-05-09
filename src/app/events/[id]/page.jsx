const SingleEvent = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://eksamenso.onrender.com/events/${id}`);
  const event = await res.json();

  return (
    <div>
      <h1>{event.title}</h1>
    </div>
  );
};

export default SingleEvent;
