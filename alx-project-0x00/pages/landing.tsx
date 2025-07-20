import Button from "@/components/Button";
import Card from "@/components/Card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="my-2 flex gap-4">
        <Button
          title="Test 1"
          styles="font-md rounded-sm cursor-pointer bg-red-200 px-4 py-2"
        />
        <Button
          title="Test 2"
          styles="font-lg rounded-lg cursor-pointer bg-red-400 px-4 py-2"
        />
        <Button
          title="Test 3"
          styles="font-xl rounded-full cursor-pointer bg-red-600 text-white px-4 py-2"
        />
      </div>
    </div>
  );
};
export default Landing;
