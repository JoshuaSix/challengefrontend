

function Challenge({challenge}) {
  console.log("each challenge>>>", challenge)
  return (
    <div className="mx-auto w-full max-w-[600px] p-4 space-y-2 bg-white rounded-lg shadow-sm my-4">
      <p className="font-bold">{challenge?.age}</p>
      <p>{challenge?.month}</p>
      <p>{challenge?.description}</p>
    </div>

    );

}
export default Challenge;