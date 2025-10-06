import RoomCard from "../RoomCard";
import roomImage from "@assets/generated_images/Cozy_lodge_room_interior_fa402585.png";

export default function RoomCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <RoomCard
        title="Deluxe Room"
        titleHindi="डीलक्स कमरा"
        image={roomImage}
        capacity={3}
        amenities={["WiFi", "Meals", "Mountain View"]}
        price="₹2,500"
      />
    </div>
  );
}
