import TripPlanner from "../components/tripplanner";
export default function Home() {
  return (
    <div className="homepage">
      <h1>Plan Your Travel</h1>
      <TripPlanner />
      {/* <ListBox /> */}
    </div>
  );
}
