import React from 'react';
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div className="p-8">
      <h1 className=" text-xl font-extralight mb-4">Landing Page</h1>

      <h2 className="text-lg font-medium mt-8">Card Examples:</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <Card />
        <Card />
        <Card />
      </div>

      <h2 className="text-lg font-medium mt-8">Button Examples:</h2>
      <div className="flex flex-wrap gap-4">
        {/* Small Buttons */}
        <Button title="Small Default" size="small" styles="" />
        <Button title="Small Rounded" size="small" shape="rounded-full" styles="" />
        <Button title="Small Squared" size="small" shape="rounded-sm" styles="" />

        {/* Medium Buttons */}
        <Button title="Medium Default" size="medium" styles="" />
        <Button title="Medium Rounded" size="medium" shape="rounded-full" styles="" />
        <Button title="Medium Squared" size="medium" shape="rounded-sm" styles="" />

        {/* Large Buttons */}
        <Button title="Large Default" size="large" styles="" />
        <Button title="Large Rounded" size="large" shape="rounded-full" styles="" />
        <Button title="Large Squared" size="large" shape="rounded-sm" styles="" />

        {/* Custom Styled Button */}
        <Button title="Custom BG" className="bg-green-500 hover:bg-green-600 rounded-lg px-8 py-4 text-xl" styles="" />
      </div>
    </div>
  )
}
export default Landing;