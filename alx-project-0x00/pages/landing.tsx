import Button from "@/components/Button";
import Card from "@/components/Card";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Test 1"
        styles="font-md rounded-md cursor-pointer bg-red-200 px-4 py-2"
      />
      <Button
        title="Test 2"
        styles="font-md rounded-md cursor-pointer bg-red-400 px-4 py-2 mx-4"
      />
      <Button
        title="Test 3"
        styles="font-md rounded-md cursor-pointer bg-red-600 text-white px-4 py-2"
      />
    </div>
  );
};
export default Landing;
