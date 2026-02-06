import Challenge from "./challenge";

function ChallengeList({ challenges }) {
  console.log("challenges>>>!!", challenges)
  return (
    <div>
      {challenges.map((challenge) => (
        <Challenge key= {challenge.id} challenge={challenge}/>
       
      ))}
    </div>
  );
}

export default ChallengeList;

// key={challenge.id}
//           className="mx-auto w-full max-w-[600px] p-4 space-y-2 bg-white rounded-lg shadow-sm my-4"
//         >
//           <p className="font-bold">{challenge.age}</p>
//           <p className="font-bold">{challenge.month}</p>
//           <p>{challenge.description}</p>

